
<template lang="pug">

nav.community-tabs
    GO.tab(
        v-for="tab of tabs"
        :key="tab.to"
        :to="tab.to"
        :class="{active: current_path === tab.to}"
    ) {{ tab.label }}

</template>

<script setup lang="ts">

// Switches between the pages about who is freely giving
const tabs = [
    {to: '/people', label: 'People'},
    {to: '/groups', label: 'Groups'},
]

const route = useRoute()

// Current path without a trailing slash, as /people may be served as /people/
const current_path = computed(() => route.path.replace(/\/$/, ''))

</script>

<style scoped lang="sass">

.community-tabs
    display: flex
    justify-content: center
    gap: 4px
    width: fit-content
    margin: 0 auto
    padding: 4px
    background: rgba(0, 0, 0, 0.2)
    border-radius: 999px

.tab
    padding: 10px 28px
    border-radius: 999px
    color: rgba(255, 255, 255, 0.8)
    text-decoration: none
    font-size: 1.05rem
    font-weight: 600
    transition: all 0.2s ease

    &:hover
        color: white
        background: rgba(255, 255, 255, 0.1)

    &.active
        color: #1a1a1a
        background: white

</style>
