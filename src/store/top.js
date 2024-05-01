import { defineStore } from 'pinia'
import { apiKey } from '@/url'
import axios from 'axios';

export const useTop = defineStore({
    id: 'Top',
    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        top10: null
    }),
    actions:{
      async getTop(){
        try {
            const res = await axios.get(`${this.url}?language=ru-Ru&api_key=${apiKey}`)
            const array = res.data.results
            const data = array.slice(0, 10)
            this.top10 = data
        } catch (error) {
            console.log('Произошла ошибка при получении топовых фильмов', error);
        }
      }
    },
    getters:{}
})