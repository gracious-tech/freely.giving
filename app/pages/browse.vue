
<template lang="pug">

.content-page
    .page-header
        h1.page-title Browse
        h2.page-subtitle Freely given Christian resources

    .categories
        section.category(
            v-for="category of resource_categories"
            :key="category.id"
            :id="category.id"
            :class="[category.gradient_class, {highlight: highlighted === category.id}]"
        )
            //- Full colour shows in the header, while the body lightens it to a faint tinge
            .category-header
                Icon.category-icon(:name="category.icon")
                h2 {{ category.title }}
            ResourceLinks.category-body(:category="category")

</template>

<script setup lang="ts">

import { resource_categories } from '@/components/resources'

definePageMeta({
    title: "Browse freely given Christian resources",
})

const route = useRoute()

// Category briefly highlighted after being linked to
const highlighted = ref<string | null>(null)
let highlight_timer: ReturnType<typeof setTimeout> | undefined

// Highlight the category named in the URL hash, restarting if already highlighted
function highlight_from_hash(): void {
    const id = route.hash.slice(1)
    clearTimeout(highlight_timer)
    highlighted.value = null
    if (!resource_categories.some(category => category.id === id)) {
        return
    }
    // Wait a frame so the animation restarts when the same category is linked again
    requestAnimationFrame(() => {
        highlighted.value = id
        highlight_timer = setTimeout(() => {
            highlighted.value = null
        }, 3000)
    })
}

// Highlight on arrival and whenever the hash changes while on the page
onMounted(highlight_from_hash)
watch(() => route.hash, highlight_from_hash)
onUnmounted(() => clearTimeout(highlight_timer))

</script>

<style scoped lang="sass">

.categories
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))
    gap: 40px
    max-width: 1100px
    margin: 60px auto 0

    @media (max-width: 768px)
        gap: 32px
        margin-top: 40px

    @media (max-width: 480px)
        grid-template-columns: 1fr

.category
    border-radius: 20px
    scroll-margin-top: 80px  // Keep linked cards clear of the sticky nav bar
    overflow: hidden  // Clip the body's overlay to the rounded corners
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15)
    display: flex
    flex-direction: column

    // Glow briefly to show which category was linked to
    &.highlight
        position: relative
        z-index: 1  // Keep the glow above neighbouring cards
        animation: highlight 3s ease-in-out

    // Cards are too narrow for the link and description to sit side by side
    :deep(.external-link-wrapper)
        grid-template-columns: 1fr
        gap: 6px

    // Dark text and white buttons to suit the light body, like other cards on the site
    :deep(.external-link)
        padding: 12px 16px
        background: white
        border-color: rgba(0, 0, 0, 0.08)
        color: #1a1a1a
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08)

        transition: none

        &:hover
            background: #ececec
            border-color: rgba(0, 0, 0, 0.12)

    :deep(.external-description)
        text-align: left
        font-size: 15px
        color: #2a2a2a

.category-header
    display: flex
    align-items: center
    gap: 14px
    padding: 20px 36px

    @media (max-width: 768px)
        padding: 16px 28px

    @media (max-width: 480px)
        padding: 14px 20px

    h2
        margin: 0
        font-size: 1.6rem
        color: white
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3)

.category-icon
    font-size: 2rem
    color: rgba(255, 255, 255, 0.95)

.category-body
    flex: 1
    padding: 32px 36px 36px
    // Mostly white like the site's other cards, letting a hint of the category colour through
    background: rgba(255, 255, 255, 0.82)

    @media (max-width: 768px)
        padding: 24px 28px 28px

    @media (max-width: 480px)
        padding: 20px

    // Clear separation between each collection in the card
    gap: 36px

    @media (max-width: 768px)
        gap: 28px

@keyframes highlight
    0%
        transform: scale(1)
        box-shadow: 0 0 0 6px white, 0 0 60px 10px rgba(255, 255, 255, 0.7)
    25%
        transform: scale(1.04)
    50%
        transform: scale(1)
    60%
        transform: scale(1)
        box-shadow: 0 0 0 6px white, 0 0 60px 10px rgba(255, 255, 255, 0.7)
    100%
        transform: scale(1)
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15)

</style>
