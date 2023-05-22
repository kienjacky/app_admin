import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Login
		},
		{
			path: '/home',
			component: Home 
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
	],
})

export default router