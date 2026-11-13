
<template lang="pug">

.resource-links
    CollectionLink(
        v-for="link of category.links"
        :key="link.url"
        :url="link.url"
        :description="link.description"
        :badge="link.badge"
    ) {{ link.label }}

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

</style>
