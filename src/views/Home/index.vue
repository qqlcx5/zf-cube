<template>
  <div class="home">
    <HomeHeader></HomeHeader>
  </div>
</template>

<script>
// 方式二 映射
// import { mapActions } from 'vuex';
import { createNamespacedHelpers } from 'vuex';
import HomeHeader from './components/HomeHeader.vue';
import * as types from '@/store/actions-type';

const { mapState, mapActions } = createNamespacedHelpers('home');

export default {
  name: 'home',
  components: {
    HomeHeader,
  },
  computed: {
    ...mapState(['categories']),
  },
  methods: {
    // 方式二 映射
    // ...mapActions('home', ['setCategories']),
    // 方式三 命名空间辅助函数
    ...mapActions([types.SET_CATEGORIES]),
  },
  mounted() {
    // 方式一
    // this.$store.dispatch('home/setCategories');
    // 方式二 映射 // 方式三 命名空间辅助函数
    this[types.SET_CATEGORIES]();
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
