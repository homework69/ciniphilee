import { defineStore } from 'pinia'
import { apiKey } from '@/url'
import axios from 'axios';

export const useSearching = defineStore({
    id: 'searching',
    state: () => ({
        url: 'https://api.themoviedb.org/3/search/multi',
        searching: null,
        search: ''
    }),
    actions:{
      async getSearch(page = 1){
        if (this.search) {
            try {
                const res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU&query=${this.search}&page=${page}`)
                this.searching = res.data.results
             } catch (error) {
                 console.log('Произошла ошибка при поиске', error);
             }
        }else{
            this.searching = null
        }
       
      }
    },
    getters:{}
})