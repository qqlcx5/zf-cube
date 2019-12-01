<template>
  <div id="app">
    <div class="container">
       <transition :name="move">
        <!-- 会根据路径切换 来显示对应的页面 -->
        <router-view></router-view>
      </transition>
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
      move: 'slide-left',
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
      handler(to, from) {
        if (to && from) {
          if (to.meta.idx > from.meta.idx) {
            this.move = 'slide-left';
          } else {
            this.move = 'slide-right';
          }
        }
        this.selectedLabelDefault = to.path;
      },
      immediate: true,
    },
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      if (this.$route.path === label) return;
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

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.4s linear;
}

.slide-left-enter-active, .slide-right-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.slide-right-enter {
  transform: translate(-100%);
}

.slide-right-leave-to {
  transform: translate(100%);
}

.slide-left-enter {
  transform: translate(100%);
}

.slide-left-leave-to {
  transform: translate(-100%);
}

</style>
