import { createApp } from 'vue/dist/vue.esm-bundler'
import './style.css'
import VueSvgInlinePlugin from "vue-svg-inline-plugin"
import App from './App.vue'
import router from './router'
import i18n from './i18n';


const app = createApp(App);
app.use(i18n)
app.use(VueSvgInlinePlugin, {
	attributes: {
		data: ["src"],
		remove: ["alt"]
	}
});
app.use(router)
app.mount('#app')

