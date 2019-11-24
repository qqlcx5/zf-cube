
import axios from 'axios';

class AjaxRequest {
  constructor() {
    // development production
    this.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api' : '/'; // 基础路径
    this.timeout = 3000; // 超时时间
  }

  // setInterceptor(instance) {
  // instance.interceptors.request.use((config) => {
  //   console.log('interceptor.request');
  //   return config;
  // }, err => Promise.reject(err));
  // instance.interceptors.response.use(res => res, err => Promise.reject(err));
  // }
  setInterceptor(instance) {
    instance.interceptors.request.use((config) => {
      // 请求拦截
      // 请求前 增加请求队列
      console.log('interceptors.request');
      return config;
    }, err => Promise.reject(err));

    instance.interceptors.response.use(res => res,
      (err) => {
        if (Object.keys(err).length === 0) {
          this.toast.hide(); // 当队列被清空隐藏掉即可
        }
        return Promise.reject(err);
      });
  }

  request(options) {
    const instance = axios.create();
    const config = {
      ...options,
      baseURL: this.baseURL,
      timeout: this.timeout,
    };
    this.setInterceptor(instance, options.url); // 给这个实例增加拦截功能
    return instance(config); // 返回的是一个promise
  }
}
export default new AjaxRequest();
