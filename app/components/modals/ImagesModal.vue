
<template lang="pug">

ResourceModal(
    :is_open="is_open"
    :title="title"
    :icon="icon"
    :gradient_class="gradient_class"
    @close="$emit('close')"
)
    CollectionLink(
        url="http://freebibleimages.org/"
        description="Bible-related images"
        badge="some restricted"
    ) Free Bible Images

    CollectionLink(
        url="https://openverse.org/"
        description="General images for complementing Christian resources"
        badge="some restricted"
    ) Openverse

</template>

<script setup lang="ts">

defineProps<{
    is_open: boolean
}>()

defineEmits<{
    close: []
}>()

const title = 'Images'
const icon = 'material-symbols:image'
const gradient_class = 'gradient-images'

</script>
