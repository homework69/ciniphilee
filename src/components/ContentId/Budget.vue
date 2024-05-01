<template>
  <div class="budget">
    <div class="container">
      <div class="budget__column">
        <div class="budget__item">
          <h3 class="budget__item-title">Бюджет</h3>
          <p class="budget__item-descr">{{ currentNum(info?.budget)}}</p>
        </div>
        <div class="budget__item">
          <h3 class="budget__item-title">Сборы</h3>
          <p class="budget__item-descr">{{currentNum(info.revenue)}}</p>
        </div>
        <div class="budget__item">
          <h3 class="budget__item-title">Статус</h3>
          <p class="budget__item-descr">{{ info?.status}}</p>
        </div>
        <div class="budget__item">
          <h3 class="budget__item-title">Исходное название</h3>
          <p class="budget__item-descr">{{ info?.original_title || info?.original_name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps(['info'])


const currentNum = (num = '') => {
    if (num == 0 || num == '') {
      return "Не известно"
    }else{
       const infoSumm = num.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        return infoSumm
    }
}

</script>

<style lang="scss" scoped></style>
