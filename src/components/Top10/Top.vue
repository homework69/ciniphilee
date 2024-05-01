<template>
  <section class="top" v-if="topMovies">
    <h2 class="top__title">
      ТОП
      <span>10</span>
    </h2>
    <Swiper
      :modules="modules"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      :space-between="23"
      :grabCursor="true"
      class="top__swiper"
    >
      <SwiperSlide
        v-for="(item, idx) in topMovies"
        :key="item.id"
        class="top__slide"
      >
        <div class="top__slide-num">{{ idx + 1 }}</div>
        <img v-lazy="fullImg + item.poster_path" class="top__slide-img" alt="" />
      </SwiperSlide>
    </Swiper>
  </section>
  <Loader v-else />
</template>

<script setup>
import { useTop } from "@/store/top";
import { computed, ref } from "vue";
import { miniImg, fullImg } from "@/url";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const modules = ref([Autoplay, Navigation ]);

const topStore = useTop();

topStore.getTop();

const topMovies = computed(() => topStore.top10);


const swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2.3,
    },
    1400:{
       slidesPerView: 3.3, 
    }
  },
});
</script>

<style lang="scss" scoped>
</style>