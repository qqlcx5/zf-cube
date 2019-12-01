<template>
  <div class="home">
    <HomeHeader
      :categories="categories"
      @listenIndex="handleCurrentIndex"
    ></HomeHeader>
    <!-- 轮播图 -->
    <div class="slideDiv">
      <cube-slide :data="slides" />
    </div>
    <!-- 可回收的滚动列表 -->
    <div class="wrapper">
      <cube-recycle-list
        ref="recycleList"
        class="list"
        :size="recycleSize"
        :on-fetch="onFetch"
        :offset="offset"
      >
        <template slot="item" slot-scope="{ data }">
          <div :id="data.id" class="item">
            <h2>{{ data.title }}</h2>
            <img :src="data.pic" alt />
            <p>{{ data.price | addCurrency("$") }} {{ data.info }}</p>
          </div>
        </template>
      </cube-recycle-list>
    </div>
  </div>
</template>

<script>
// 方式二 映射
// import { mapActions } from 'vuex';
import { createNamespacedHelpers } from "vuex";
import { fetchLessonList } from "@/api/home";
import HomeHeader from "./components/HomeHeader.vue";
import * as types from "@/store/actions-type";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers("home");

export default {
  name: "home",
  components: {
    HomeHeader
  },
  data() {
    return {
      recycleSize: 5,
      offset: 50
    };
  },
  computed: {
    ...mapState(["categories", "slides"])
  },
  methods: {
    // 方式二 映射
    // ...mapActions('home', ['setCategories']),
    // 方式三 命名空间辅助函数
    ...mapActions([types.SET_CATEGORIES, types.SET_SLIDES]),
    ...mapMutations([types.SET_CURRENTLESSON]),
    // 切换当前的课程
    handleCurrentIndex(val) {
      this[types.SET_CURRENTLESSON](val[0]);
      this.hasMore = true; // 当前是否还有
      this.offsetIndex = 0;
      this.$refs.recycleList.reset();
    },
    async onFetch() {
      if (this.hasMore) {
        const { result, hasMore } = await fetchLessonList(
          this.recycleSize,
          this.offsetIndex
        );
        this.hasMore = hasMore; // 当前是否还有
        this.offsetIndex += result.length; // 找到对应的偏移量
        return result; // 每次返还的数据
      }
      return false;
    }
  },
  created() {
    this.hasMore = true;
    this.offsetIndex = 0;
  },
  mounted() {
    // 方式一
    // this.$store.dispatch('home/setCategories');
    // 方式二 映射 // 方式三 命名空间辅助函数
    this[types.SET_CATEGORIES](); // 请求课程列表
    this[types.SET_SLIDES](); // 请求课程列表
  }
};
</script>

<style lang="stylus" scoped>
.HomeHeader {
  display: flex;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #2a2a2a;
}

.logo {
  width: 150px;
}

.moreIcon {
  font-size: 20px;
  color: #fff;
}

.slideDiv {
  width: 100%;
  height: 150px;

  & >>> .cube-slide {
    img {
      width: 100%;
      max-width: 100%;
    }
  }
}

.wrapper {
  height: calc(100vh - 276px);
  padding: 0 16px;
  box-sizing border-box;
  margin: 10px auto 0;

  & >>> .cube-recycle-list {
    .item {
      display: flex;
      border: 1px solid #ccc;
      border-radius: 5px;
      flex-direction: column;
      justify-content: center;
      height: 250px;
      margin-bottom: 10px;

      img {
        width: 100%;
      }

      h2, p {
        text-align: center;
        line-height: 30px;
      }
    }
  }
}
</style>
