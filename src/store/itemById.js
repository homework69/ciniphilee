import { defineStore } from 'pinia'
import { apiKey } from '@/url'
import axios from 'axios';

export const useItemById = defineStore({
    id: 'itemById',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movie: null
    }),
    actions:{
      async getItemById({type, id}){
        try {
          const res = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU`)
          this.movie = res.data
        } catch (error) {
            console.log('Произошла ошибка при получении фильмов по id', error);
        }
      }
    },
    getters:{}
})