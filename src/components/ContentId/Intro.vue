<template>
  <div class="media">
    <img class="media__poster" v-lazy="fullImg + currentMovie.backdrop_path" alt="" />
    <div class="media__block">
      <div class="media__block-left">
        <h1 class="media__block-left-title">{{currentMovie.name || currentMovie.title}}</h1>
        <p class="media__block-left-text">
          {{ currentMovie.overview  || currentMovie.name }}
        </p>
        <p class="media__block-left-janr">
            <span>{{ getYear }}</span>
            <span>{{ getGenres }}</span>
        </p>
        <button class="media__btn" @click="openVideo">
            <fa icon="play" class="media__btn-icon"/>
          <span>Смотерть трейлер</span>
        </button>
      </div>

      <div class="media__block-right">
        <img v-lazy="fullImg + currentMovie.poster_path" alt="" />
      </div>
      <div class="media__block-actors">
        <h2 class="media__block-title">В главных ролях</h2>
        <div class="media__block-casts">
          <Actor :type="type" :id="currentMovie.id" :count="6" />
        </div>
      </div>
    </div>
        <Video :type="props.type" :openVideo="isopenMovie" @closeVideo="closeVideo" :randomVideo="randomVideo"/>
  </div>
</template>

<script setup>
const props = defineProps(["type", "currentMovie"]);
import { miniImg, fullImg } from "@/url";
import Video from './Video.vue'
import { useVideo } from '@/store/video'
import { onMounted,computed,ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const videoStore = useVideo()


const randomVideo = computed(() => videoStore.videoRandom)


const getYear = computed(() => new Date(props.currentMovie.release_date).getFullYear() || new Date(props.currentMovie.first_air_date).getFullYear())
const getGenres = computed(() => props.currentMovie.genres.reduce((acc, item) => acc + `, ${item.name}`, ''))

let isopenMovie = ref(false)
const openVideo = async () => {
  await videoStore.getVideo({type: props.type, id: route.params.id})
  isopenMovie.value = true
   window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
const closeVideo = () => {
  isopenMovie.value = false
  videoStore.video = null
}

</script>

<style lang="scss" scoped>
</style>