
<template lang="pug">

ResourceModal(
    :is_open="is_open"
    :title="title"
    :icon="icon"
    :gradient_class="gradient_class"
    @close="$emit('close')"
)
    CollectionLink(
        url="https://ebible.org/Scriptures/"
        description="A repository of Bible translations in many different formats"
        badge="some restricted"
    ) eBible.org
    CollectionLink(
        url="https://dbs.org/bibles"
        description="A repository of Bible translations in several different formats"
        badge="some restricted"
    ) Digital Bible Society
    CollectionLink(
        url="https://paper.bible"
        description="Generate PDFs of Scripture for printing at home or professionally"
    ) Paper Bible
    CollectionLink(
        url="https://fetch.bible"
        description="A software platform for integrating Scripture into websites and apps"
    ) fetch(bible)

</template>

<script setup lang="ts">

defineProps<{
    is_open: boolean
}>()

defineEmits<{
    close: []
}>()

const title = 'Bibles'
const icon = 'fa7-solid:bible'
const gradient_class = 'gradient-scripture'


</script>
