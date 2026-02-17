

<script setup>

const route = useRoute()


// Global head configuration
useHead({
    link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ],
    meta: [
        { name: 'theme-color', content: '#6b3580' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ],
})

// Global SEO meta tags
const default_title = "Freely giving the things of God"
const default_desc = "Giving Christian resources, free of cost and copyright, for the sake of the gospel."
useSeoMeta({
    title: () => route.meta.title || default_title,
    ogTitle: () => route.meta.title || default_title,
    description: () => route.meta.description || default_desc,
    ogDescription: () => route.meta.description || default_desc,
    ogImage: () => route.meta.image || 'https://freely.giving/social.jpg',
    twitterCard: 'summary',
})

// Add page slug class to body (client-side only)
onMounted(() => {
    const update_body_class = (path) => {
        // Remove all existing page classes
        document.body.className = document.body.className.replace(/page-\S+/g, '').trim()

        // Add new page class based on route
        const slug = path === '/' ? 'index' : path.substring(1).replace(/\//g, '-')
        document.body.classList.add(`page-${slug}`)
    }

    // Watch for route changes
    watch(() => route.path, update_body_class, {immediate: true})
})

</script>
<template>
    <div>
        <NuxtPage />
    </div>
</template>
