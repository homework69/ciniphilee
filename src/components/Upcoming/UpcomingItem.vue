<template>
<Transition name="upcoming" mode="out-in">
    <div class="upcoming__item" v-if="slideView == idx">
    <img v-lazy="fullImg + movie.backdrop_path" alt="" class="upcoming__item-img" />
    <div class="upcoming__content">
      <h1 class="upcoming__content-title">{{ movie.title }}</h1>
      <p class="upcoming__content-text">
       {{ movie.overview || 'К данному фильму не добавлено описание...'}}
      </p>
      <BtnMore type="movie" :id="movie.id"/>
    </div>
    <div class="upcoming__next" @click="$emit('slideNext')">
      <img v-lazy="fullImg + nextMovie.backdrop_path" alt="">
      <div class="upcoming__next-content">
        <span>Следующий</span>
        <h2>{{ nextMovie.title }}</h2>
      </div>
      <div class="upcoming__next-line"></div>
    </div>
    </div>
</Transition>
</template>

<script setup>
import {miniImg, fullImg } from '@/url'
const props = defineProps({
  idx: {
    typeof: Number
  },
  movie: {
    typeof: Object
  },
  slideView:{
    typeof: Number
  },
  nextMovie:{
    typeof: Object
  }
})
</script>

<style lang="scss" scoped>

.upcoming-enter-active,
.upcoming-leave-active {
  transition: .5s;
}

.upcoming-enter-from{
  opacity: 0;
  transform: scale(1);
}
.upcoming-leave-to{
  opacity: 0;
  transform: scale(1.5);
}




</style>