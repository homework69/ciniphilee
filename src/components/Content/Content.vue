<template>
   <section class="content">
        <div class="container">
            <h2 class="content__title">
                {{ props.type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}
            </h2>
            <div class="content__list">
                <ContentItem
                v-for="item in content"
                :key="item.id"
                :item="item"
                :type="type"
                />
            </div>
            <Pagination
            :currentPage="currentPage"
            :totalPage="totalPage"
            @page="page"
            />

        </div>
   </section>
</template>

<script setup>
const props = defineProps(['type'])
import ContentItem from './ContentItem.vue'
import Pagination from '@/components/UI/Pagination.vue'
import { usePopular } from "@/store/popular";
import { computed, onMounted, ref } from "vue";
import { useRouter } from 'vue-router'


const router = useRouter()

const popular = usePopular();

onMounted(() => popular.getPopular({type: props.type, page: 1}))

const content = computed(() => props.type == 'movie' ? popular.popularMovies : popular.popularTvs)


// Кнопки

const currentPage = ref(1)
const totalPage = ref(500)

const page = async (newPage) => {
    currentPage.value = newPage
    await popular.getPopular({type: props.type, page: currentPage.value})
    router.push({name: props.type, query:{page: currentPage.value}})
}

console.log(router);


</script>

<style lang="scss" scoped>

</style>