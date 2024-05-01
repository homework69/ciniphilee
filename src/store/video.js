import { defineStore } from 'pinia';
import { apiKey } from '@/url';
import axios from 'axios';

export const useVideo = defineStore({
  id: 'video',
  state: () => ({
    url: 'https://api.themoviedb.org/3/',
    video: null,
  }),
  actions: {
    async getVideo({ type, id }) {
      try {
        const res = await axios.get(
          `${this.url}${type}/${id}/videos?api_key=${apiKey}`
        );
        this.video = res.data.results;
      } catch (error) {
        console.log('Произошла ошибка при получении видео', error);
      }
    },
  },
  getters: {
    videoRandom(state) {
      if (state?.video?.length) {
        const random = Math.floor(
          Math.random() * (state?.video?.length - 1 + 1)
        );
        return state.video[random].key;
      }
    },
  },
});
