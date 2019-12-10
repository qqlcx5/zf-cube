import axios from "@/utils/ajaxRequest";
// eslint-disable-next-line import/no-cycle
import store from "@/store";

export const fetchCategory = () => axios.request({ url: "/category" });
export const fetchSlides = () => axios.request({ url: "/slides" });
export const fetchLessonList = (size, offset) =>
  axios.request({
    // 如果store中的课程变化了 发送接口的时候 会自动更新对应的数据
    url: `/lessonList/${store.state.home.currentLesson}?size=${size}&offset=${offset}`
  });
