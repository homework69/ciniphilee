<template>
  <div class="info" :class="{active: isOpen}" v-if="current">
    <img v-lazy="fullImg + current.backdrop_path" alt="" class="info__bg" />
    <img src="@/assets/img/close.svg" alt="" class="info__close" @click="$emit('close')">
    <div class="info__content"  >
      <h2>{{ current.title || current.name }}</h2>
      <p>
        {{ current.overview || current.name }}
      </p>
      <div class="info__content-data">
        <span>{{ getYear }}</span>
        <span>{{ getGenres }}</span>
      </div>
      <Actor
      :type="type"
      :id="current.id"
      count="4"
      />
      <BtnMore :type="type"  :id="current.id"/>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import {miniImg, fullImg } from '@/url'
const props = defineProps(['isOpen','current', 'type'])


const getYear = computed(() => new Date(props.current.release_date).getFullYear() || new Date(props.current.first_air_date).getFullYear())
const getGenres = computed(() => props.current.genres.reduce((acc, item) => acc + `, ${item.name}`, ''))
</script>

<style lang="scss" scoped>
</style>