import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ReviewsView from '@/views/ReviewsView.vue'
import ContactsView from '@/views/ContactsView.vue'
import Tr from '@/i18n/translation'

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes: [
		{
			path: "/:locale?",
			component: RouterView,
			beforeEnter: Tr.routeMiddleWare,
			children: [
				{
					path: '',
					name: 'home',
					component: HomeView
				},
				{
					path: 'portfolio',
					name: 'portfolio',
					component: PortfolioView
				},
				{
					path: 'services',
					name: 'services',
					component: ServicesView
				},
				{
					path: 'reviews',
					name: 'reviews',
					component: ReviewsView
				},
				{
					path: 'contacts',
					name: 'contacts',
					component: ContactsView
				}
			]
		}
	]
})
export default router