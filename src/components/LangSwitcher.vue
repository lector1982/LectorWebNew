<template>
	<div class="lang">
		<button
		@click="switchLanguage(sLocale)"
		v-for="sLocale in supportedLocales"
		:key="`locale-${sLocale}`"
		:class="{active: locale === sLocale }"
		>{{ sLocale }}</button>
	</div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Tr from '@/i18n/translation'
export default {
	setup() {

		const { t, locale } = useI18n()

		const supportedLocales = Tr.supportedLocales

		const router = useRouter()

		const switchLanguage = async (newLocale) => {
			await Tr.switchLanguage(newLocale)
			try {
				await router.replace({ params: {locale: newLocale} })
			} catch (e) {
				console.error(e)
				router.push('/')
			}
		}

		return { t, locale, supportedLocales, switchLanguage }
	}
}
</script>