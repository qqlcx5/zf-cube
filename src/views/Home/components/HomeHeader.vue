<template>
  <div class="HomeHeader">
    <img class="logo" src="@/assets/images/logo.png" alt="">
    <i class="iconfont icon-huaban129 moreIcon" @click="handleDrawer" ></i>
    <cube-drawer ref="drawer" title="请选择" :data="dealData" @select="handlerSelect"></cube-drawer>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {

    };
  },
  computed: {
    dealData() {
      const defaultActive = [{ text: '全部课程', value: '-1' }];
      return this.categories.length > 0
        ? [[...defaultActive, ...this.categories]] : [defaultActive];
    },
  },
  methods: {
    handleDrawer() {
      this.$refs.drawer.show();
    },
    handlerSelect(val) {
      // console.log(val[0]);
      this.$emit('listenIndex', val);
    },
  },
};
</script>
<style lang="stylus" scoped>
  .HomeHeader{
    display flex;
    height 56px
    justify-content space-between
    align-items center
    padding 0 20px
    background-color #2a2a2a
  }
  .logo{
    width 150px
  }
  .moreIcon{
    font-size 20px
    color #fff
  }
</style>
