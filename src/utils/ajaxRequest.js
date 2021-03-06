import axios from "axios";
import { Toast } from "cube-ui";
import store from "../store/index";
import * as types from "@/store/actions-type";
class AjaxRequest {
  constructor() {
    // development production
    this.baseURL =
      process.env.NODE_ENV !== "production"
        ? "http://106.14.200.71:3000/api"
        : "/"; // 基础路径
    // this.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api' : '/'; // 基础路径
    this.timeout = 3000; // 超时时间
    this.toast = Toast.$create({
      txt: "正在加载",
      time: 0
    });
    // 请求队列
    this.queue = {};
  }

  setInterceptor(instance, url) {
    instance.interceptors.request.use(
      config => {
        const CancelToken = axios.CancelToken;
        config.cancelToken = new CancelToken(c => {
          store.commit(types.PUSH_TOKEN, c);
        });
        // 增加请求队列 请求前打开toast 请求后清空在关闭toast
        if (Object.keys(this.queue).length === 0) {
          this.toast.show();
        }
        this.queue[url] = url;
        return config;
      },
      err => Promise.reject(err)
    );

    instance.interceptors.response.use(
      res => {
        delete this.queue[url];
        if (Object.keys(this.queue).length === 0) {
          this.toast.hide();
        }
        if (res.data.code === 0) {
          return res.data.data;
        }
        return res;
      },
      err => {
        delete this.queue[url];
        if (Object.keys(this.queue).length === 0) {
          this.toast.hide();
        }
        return Promise.reject(err);
      }
    );
  }

  request(options) {
    const instance = axios.create();
    const config = {
      ...options,
      baseURL: this.baseURL,
      timeout: this.timeout
    };
    this.setInterceptor(instance, options.url); // 给这个实例增加拦截功能
    return instance(config); // 返回的是一个promise
  }
}
export default new AjaxRequest();
