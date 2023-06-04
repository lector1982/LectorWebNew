<template>
	<aside class="nav">
		<img class="logo" src="@/assets/img/logo.png" alt="LectorWeb">
		<img class="face" src="@/assets/img/mini-photo.jpg" alt="LectorWeb">
		<LangSwitcher />

		<nav class="menu">
			<RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{ $t("nav.home") }}</RouterLink>
			<RouterLink :to="Tr.i18nRoute({ name: 'portfolio' })">{{ $t("nav.portfolio") }}</RouterLink>
			<RouterLink :to="Tr.i18nRoute({ name: 'services' })">{{ $t("nav.services") }}</RouterLink>
			<RouterLink :to="Tr.i18nRoute({ name: 'reviews' })">{{ $t("nav.reviews") }}</RouterLink>
			<RouterLink :to="Tr.i18nRoute({ name: 'contacts' })">{{ $t("nav.contacts") }}</RouterLink>
		</nav>
	</aside>
</template>

<script>
import LangSwitcher from '@/components/LangSwitcher.vue'
import Tr from '@/i18n/translation'

export default {
	components: { LangSwitcher },
	setup() {
		return { Tr }
	}
}
</script>

<style>
.nav {
	height: 100%;
	width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #000;
	position: fixed;
	z-index: 2;
	padding: 15px;
}
.logo {
		width: 100px;
		margin-bottom: 30px;
}
.face {
	width: 100px;
	height: 100px;
	margin-bottom: 30px;
}
.lang {
	margin-bottom: 30px;
	color: #fff;
	font-size: 20px;
	font-weight: 600;
}
.lang	button {
	text-transform: uppercase;
	border: none;
	background: none;
	color: #fff;
	font-size: 20px;
	font-weight: 600;
	padding: 0;
}
.lang	button:not(:last-child)::after {
	content: "/";
	margin: 0 8px;
	color: #fff;
}
.lang	.active {
	color: #D62929;
}
.menu {
	display: flex;
	flex-direction: column;
}
.menu a {
	color: #fff;
	font-size: 20px;
	text-align: center;
	margin: 4px 0;
}
.menu .router-link-exact-active {
	color: #D62929;
}
</style>