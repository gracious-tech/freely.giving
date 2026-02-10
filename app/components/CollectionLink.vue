
<template lang="pug">

.external-link-wrapper
    GO.external-link(:to="url")
        slot
    p.external-description(v-if="description")
        | {{ description }}
        template(v-if="badge")
            | &nbsp;
            span.badge {{ badge }}

</template>

<script setup lang="ts">

defineProps<{
    url: string
    description?: string
    badge?: string
}>()

</script>

<style scoped lang="sass">

.external-link-wrapper
    display: grid
    grid-template-columns: 1fr
    gap: 12px
    align-items: center

    @media (min-width: 768px)
        grid-template-columns: auto 1fr
        gap: 20px

.external-link
    padding: 16px 24px
    background: rgba(255, 255, 255, 0.2)
    backdrop-filter: blur(10px)
    border: 1px solid rgba(255, 255, 255, 0.3)
    color: white
    text-decoration: none
    border-radius: 12px
    font-weight: 600
    font-size: 1.1rem
    text-align: center
    transition: all 0.3s ease
    white-space: nowrap

    @media (max-width: 768px)
        padding: 12px 16px
        font-size: 0.95rem
        border-radius: 8px

    &:hover
        background: rgba(255, 255, 255, 0.3)
        border-color: rgba(255, 255, 255, 0.5)

.external-description
    margin: 0
    color: rgba(255, 255, 255, 0.9)
    line-height: 1.5
    font-size: 17px
    font-weight: 500
    text-align: left

    @media (max-width: 767px)
        text-align: center
        font-size: 0.85rem
        line-height: 1.4

.badge
    display: inline-block
    padding: 2px 6px
    background: #b70
    color: white
    font-size: 14px
    border-radius: 4px
    white-space: nowrap
    font-family: Roboto Condensed, Roboto, Arial, sans-serif
    font-weight: 500

</style>
