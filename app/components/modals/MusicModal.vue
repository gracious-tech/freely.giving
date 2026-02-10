
<template lang="pug">

ResourceModal(
    :is_open="is_open"
    :title="title"
    :icon="icon"
    :gradient_class="gradient_class"
    @close="$emit('close')"
)
    CollectionLink(
        url="http://openhymnal.org/"
        description="A large collection of historic hymns"
    ) Open Hymnal
    CollectionLink(
        url="/music"
        description="A small list of modern Christian music"
    ) Freely Given Music
    p.disclaimer A modern platform with modern music that can be browsed, streamed, and displayed with presentation software, is still to come. Please pray someone is able to take on such a task.

</template>

<script setup lang="ts">

defineProps<{
    is_open: boolean
}>()

defineEmits<{
    close: []
}>()

const title = 'Music'
const icon = 'material-symbols:music-note'
const gradient_class = 'gradient-music'

</script>

<style scoped lang="sass">

</style>
