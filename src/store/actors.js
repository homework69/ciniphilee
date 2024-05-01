import { defineStore } from 'pinia'
import { apiKey } from '@/url'
import axios from 'axios';

export const useActors = defineStore({
    id: 'actors',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        actorAll: null
    }),
    actions:{
      async getActors({type, id, count}){
        try {
            const res = await axios.get(`${this.url}${type}/${id}/credits?language=ru-RU&api_key=${apiKey}`)
            this.actorAll = res.data.cast
          
        } catch (error) {
            console.log('Произошла ошибка при получении актеров', error);
        }
      }
    },
    getters:{
        getFilterActors(state){
          return function (count){
            if (state.actorAll) {
              return state.actorAll.slice(0, count)
            }
          }
        }
    }
})