<template>
    <section class="upcoming" v-if="getUpcomingMovies">
        <UpcomingItem
        v-for="(movie, idx) in getUpcomingMovies"
        :key="movie.id"
        :idx="idx"
        :movie="movie"
        :slideView="slideView"
        :nextMovie="getUpcomingMovies[idx + 1 == getUpcomingMovies.length ? 0 : idx + 1]"
        @slideNext="slideNext"
        />
    </section>
    <Loader v-else/>
</template>

<script setup>
import UpcomingItem from './UpcomingItem.vue'
import { useUpcoming } from '@/store/upcoming'
import { computed, ref, onMounted } from 'vue'

const upcomingStore = useUpcoming()
upcomingStore.getUpcoming()

const getUpcomingMovies = computed(() => upcomingStore.upcoming)

let slideView = ref(0)
let timer = ref(null)

const slide = () => {
    if (getUpcomingMovies.value.length - 1 == slideView.value) {
        slideView.value = 0
    }else{
        slideView.value++
    }
    timer = setTimeout(() => slide(), 5000);
}


onMounted(() => {
    timer = setTimeout(() => slide(), 5000)
})

const slideNext = () =>{
  clearInterval(timer)
  slide()
}

</script>

<style lang="scss" scoped>

</style>