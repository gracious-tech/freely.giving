export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['modern-normalize/modern-normalize.css', './app/styles.sass'],
    modules: ['@nuxt/icon'],
    components: [{path: '~/components', pathPrefix: false}],
})
