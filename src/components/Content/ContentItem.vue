<template>
  <div class="content__list-item">
    <RouterLink :to="type + `/${item.id}`">
      <img
        v-lazy="fullImg + item.poster_path"
        alt=""
        class="content__list-img"
      />
      <h3 class="content__list-name">
        {{ item.title || item.name }}
      </h3>
    </RouterLink>
  </div>
</template>

<script setup>
import { miniImg, fullImg } from '@/url';
const props = defineProps(['item', 'type']);
</script>

<style lang="scss" scoped></style>
