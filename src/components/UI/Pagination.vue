<template>
  <div class="content__pagination pagination">
    <button @click="$emit('page', currentPage - 1)" :disabled="currentPage == 1">prev</button>
    <span>Страница {{ currentPage }} из {{ totalPage }}</span>
    <button @click="$emit('page', currentPage + 1)" :disabled="currentPage == totalPage">next</button>
  </div>
</template>

<script setup>
const props = defineProps(["currentPage", "totalPage"]);
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 50px 0;
}
button {
  padding: 5px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
span {
  color: white;
  font-size: 30px;
}
</style>