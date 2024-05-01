<template>
  <div class="recommend" v-if="movieRecommend"> 
    <div class="container">
      <h2 class="recommend__title">{{ movieRecommend.length == 0 ? 'Рекомендации нет' : 'Рекомендации' }}</h2>
      <div class="recommend__column">
        <div class="recommend__column-item"  v-for="movie in movieRecommend" :key="movie.id">
          <img class="recommend__column-img" v-lazy="fullImg + movie.poster_path" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['type']);
import { useRecommend } from '@/store/recommend';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { miniImg, fullImg } from "@/url";
const route = useRoute();

const recommendStore = useRecommend();

 onMounted( () => 
  recommendStore.getRecommend({ type: props.type, id: route.params.id })
);

const movieRecommend = computed(() => recommendStore.getFilterRecommend)
</script>

<style lang="scss" scoped></style>
