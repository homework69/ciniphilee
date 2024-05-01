<template>
  <div class="info__actors">
    <div class="info__actors-item" v-for="actor in actors" :key="actor.id">
      <img v-lazy="miniImg + actor.profile_path" alt="" />
      <span>{{ actor.original_name }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["type", "id", "count"]);
import { miniImg, fullImg } from "@/url";
import { useActors } from "@/store/actors";
import { computed } from "vue";

const actorsStore = useActors();

actorsStore.getActors({ type: props.type, id: props.id, count: props.count });

const actors = computed(() => actorsStore.getFilterActors(props.count));
</script>

<style lang="scss" scoped>
.info__actors {
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
  &-item {
    border: 1px solid #fff;
    border-radius: 25px;
    background: rgba(20, 20, 20, 0.5);
    padding-right: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    & img {
      width: 45px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      padding: 1px;
    }
    & span {
      font-size: 16px;
      line-height: 187%;
      color: #fff;
    }
  }
}
</style>