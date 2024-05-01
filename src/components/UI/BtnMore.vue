<template>
  <RouterLink :to="`${type}/${id}`" class="btn">
    <fa icon="bars" class="btn__icon"/>
    <span class="btn__text">Подробнее</span>
  </RouterLink>
</template>

<script setup>
  const props = defineProps(['type', 'id'])
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  border-radius: 10px;
  background: #149a03;
  width: max-content;
  &__text {
    color: #fff;
    font-size: 20px;
    line-height: 1.5;
  }
  &__icon{
    color: white;
  }
}
</style>