<template>
  <div class="content" v-if="content">
    <RouterLink class="content__link" :to="props.type">
      {{ props.type == "movie" ? "Фильмы" : "Сериалы" }}
      <img src="@/assets/img/arrow.svg" alt="" />
    </RouterLink>

    <Swiper
      :modules="modules"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      :space-between="23"
      :grabCursor="true"
      :autoplay="{
        delay: props.type == 'movie' ? 2500 : 1000,
        disableOnInteraction: false,
      }"
      class="content__mySwiper"
    >
      <SwiperSlide
        v-for="item in content"
        :key="item.id"
        class="content__slide"
        @click="open(item)"
      >
        <img v-lazy="fullImg + item.poster_path" class="content__img" alt="" />
      </SwiperSlide>
      <SwiperSlide class="content__slide">
        <RouterLink :to="props.type" class="content__route">
          <img src="@/assets/img/arrow.svg" alt="" />
          {{ props.type == "movie" ? "Все фильмы" : "Все сериалы" }}
        </RouterLink>
      </SwiperSlide>
    </Swiper>
    <div class="main__in" ref="itemBlock">
      <ItemBlock 
      :isOpen="isOpen" 
      @close="close" 
      :current="current"
      :type="type"
      />
    </div>
  </div>
  <Loader v-else />
</template>

<script setup>
import ItemBlock from "@/components/ItemBlock/ItemBlock.vue";
import { miniImg, fullImg } from "@/url";
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { usePopular } from "@/store/popular";
import { useItemById } from "@/store/itemById";
import { useActors } from '@/store/actors'
const props = defineProps(["type"]);

const actorsStore = useActors()

const popular = usePopular();
const itemByIdStore = useItemById();

let isOpen = ref(false);
let current = ref(null);
let itemBlock = ref(null);

const open = async (item) => {
  current.value = null
  await itemByIdStore.getItemById({ type: props.type, id: item.id });
  current.value = itemByIdStore.movie;
  isOpen.value = true;
  const itemTop = itemBlock.value.offsetTop

  window.scrollTo({
    top: itemTop - navbar.clientHeight,
    behavior: 'smooth'
  })
};
const close = () => {
  itemByIdStore.movie = actorsStore.actorAll =  null
  isOpen.value = false;
};

popular.getPopular({ type: props.type });
const modules = ref([Autoplay, Navigation]);

const content = computed(() =>
  props.type == "movie" ? popular.popularMovies : popular.popularTvs
);
const swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5.5,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>