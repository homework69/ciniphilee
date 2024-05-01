import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

export const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: HomePage},
        {path: '/movie', name: 'movie', component: () => import('@/pages/MoviesPage.vue')},
        {path: '/tv', name: 'tv', component: () => import('@/pages/TvsPage.vue')},
        {path: '/search', name: 'search', component: () => import('@/pages/SearchPage.vue')},

        {path: '/movie/:id', name: 'movieid', component: () => import('@/pages/MovieId.vue')},
        {path: '/tv/:id', name: 'tvid', component: () => import('@/pages/TvsId.vue')},
    ],

    scrollBehavior(){
        return{
            top: 0,
            behavior: 'smooth'
        }
    }
})