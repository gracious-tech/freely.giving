
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
        description="Bible-related images from various contributors"
        badge="some restricted"
    ) Free Bible Images

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
