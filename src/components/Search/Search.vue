<template>
  <div class="search">
    <div class="container">
      <input
        type="text"
        placeholder="Найти фильм, сериал..."
        class="search__input"
        v-model="searchValue"
      />
    </div>
  </div>
  <div class="list" v-if="multiple">
    <div class="container">
      <RouterLink to="/" v-for="(item, idx) in multiple" :key="item.id" @click="searchItem(idx)">
        <img class="list__img" v-lazy="fullImg + item.poster_path" alt="" />
         {{searchType}}
      </RouterLink>
     
    </div>
  </div>
</template>

<script setup>
import { useSearching } from "@/store/searching";
import { computed, ref } from "vue";
import { miniImg, fullImg } from "@/url";

const searchStore = useSearching();

const debounce = (cb, delay) => {
  let timer = null;
  return () => {
    if (timer) {
      clearInterval(timer);
    }

    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};

const searchArray = debounce(searchStore.getSearch, 100);

const multiple = computed(() => searchStore.searching);

const searchValue = computed({
  get: () => searchStore.search,
  set: (val) => {
    searchStore.search = val;
    searchArray();
  },
});

const itemEl = ref(0)




</script>

<style lang="scss" scoped>
</style>