// 实现loading效果
import loading from '../components/loading.vue';

const loadable = (asyncFunction) => {
  const component = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: asyncFunction(),
    // 异步组件加载时使用的组件
    loading,
    // 加载失败时使用的组件
    // error: ErrorComponent,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    // delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    // timeout: 3000
  });
  // 最终要返回一个组件，组件需要有render，通过render 在去渲染一个异步组件
  // 组件是一个对象 会变成render函数
  return { // cli 默认不支持模板
    render(h) {
      return h(component);
    },
  };
};
export default loadable;
