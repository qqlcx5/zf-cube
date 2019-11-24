<template>
  <div class="HomeHeader">
    <img class="logo" src="@/assets/images/logo.png" alt="">
    <i class="iconfont icon-huaban129 moreIcon" ></i>
  </div>
</template>

<script>
// @ is an alias to /src
import { fetchCategory } from '../../../api/home';

export default {
  name: 'HomeHeader',
  mounted() {
    fetchCategory().then((res) => {
      console.log(res);
    });
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
