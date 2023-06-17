import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
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
					path: 'about',
					name: 'about',
					component: AboutView,
					meta: {
						title: 'About'
					}
				},
				{
					path: 'portfolio',
					name: 'portfolio',
					component: PortfolioView,
					meta: {
						title: 'Portfolio'
					}
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
router.beforeEach((to, from, next) => {
	// Get the page title from the route meta data that we have defined
	// See further down below for how we setup this data
	const title = to.meta.title
	// If the route has a title, set it as the page title of the document/page
	if (title) {
		document.title = title
	}
	// Continue resolving the route
	next()
})
export default router