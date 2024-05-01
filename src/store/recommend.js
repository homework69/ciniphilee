import { defineStore } from 'pinia'
import { apiKey } from '@/url'
import axios from 'axios';

export const useRecommend = defineStore({
    id: 'recommend',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        recommend: null
    }),
    actions:{
      async getRecommend({type, id}){
        try {
            const res = await axios.get(`${this.url}${type}/${id}/recommendations?api_key=${apiKey}&language=ru-RU`)
            this.recommend = res.data.results
        } catch (error) {
            console.log('Произошла ошибка при получении рекомендованных фильмов', error);
        }
      }
    },
    getters:{
        getFilterRecommend(state) {
            return state?.recommend?.slice(0, 4)
       }
    }
})