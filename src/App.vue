<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
    <div class="footer">
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="clickHandler" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLabelDefault: '/',
      tabs: [
        {
          label: '首页',
          value: '/',
          icon: 'iconfont icon-huaban43 iconTab',
        },
        {
          label: '我的课程',
          value: '/course',
          icon: 'iconfont icon-huaban5 iconTab',
        },
        {
          label: '个人中心',
          value: '/profile',
          icon: 'iconfont icon-huaban83 iconTab',
        },
      ],
    };
  },
  watch: {
    $route: {
      handler(to) {
        this.selectedLabelDefault = to.path;
      },
      immediate: true,
    },
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
      this.$router.push(label);
    },
  },
};
</script>
<style lang="stylus" scoped>
html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  height: 100vh;
  font-size: 16px;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  overflow: scroll;
}
.footer >>> .cube-tab-bar {
  background-color #eee;
  .iconTab{
    font-size 20px;
    line-height 30px;
  }
}
</style>
