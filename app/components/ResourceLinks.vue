
<template lang="pug">

.resource-links
    CollectionLink(
        v-for="link of category.links"
        :key="link.url"
        :url="link.url"
        :description="link.description"
        :badge="link.badge"
    ) {{ link.label }}
    p.disclaimer(v-if="category.disclaimer") {{ category.disclaimer }}

</template>

<script setup lang="ts">

import type { ResourceCategory } from '@/components/resources'

// Lists the collections within a resource category
defineProps<{
    category: ResourceCategory
}>()

</script>

<style scoped lang="sass">

.resource-links
    display: flex
    flex-direction: column
    gap: 16px

    @media (max-width: 768px)
        gap: 12px

.disclaimer
    margin: 16px 0 0
    padding-top: 24px
    border-top: 1px solid rgba(255, 255, 255, 0.2)
    color: rgba(255, 255, 255, 0.85)
    font-size: 18px
    line-height: 1.6
    text-align: center
    font-style: italic

</style>
