
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
            :class="category.gradient_class"
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

</script>

<style scoped lang="sass">

.categories
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))
    gap: 40px
    max-width: 1100px
    margin: 60px auto 0

    @media (max-width: 768px)
        gap: 24px
        margin-top: 40px

    @media (max-width: 480px)
        grid-template-columns: 1fr
        gap: 16px

.category
    border-radius: 20px
    scroll-margin-top: 80px  // Keep linked cards clear of the sticky nav bar
    overflow: hidden  // Clip the body's overlay to the rounded corners
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15)
    display: flex
    flex-direction: column

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

    :deep(.disclaimer)
        font-size: 15px
        color: #444
        border-top-color: rgba(0, 0, 0, 0.1)

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

    // Space out the collections more where there is room
    @media (min-width: 769px)
        gap: 24px

</style>
