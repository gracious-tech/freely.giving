
<template lang="pug">

ResourceModal(
    :is_open="is_open"
    :title="title"
    :icon="icon"
    :gradient_class="gradient_class"
    @close="$emit('close')"
)
    CollectionLink(
        url="https://lets.church/"
        description="A platform that hosts videos for free with no ads"
        badge="some restricted"
    ) Let's Church

</template>

<script setup lang="ts">

defineProps<{
    is_open: boolean
}>()

defineEmits<{
    close: []
}>()

const title = 'Videos'
const icon = 'material-symbols:play-circle'
const gradient_class = 'gradient-videos'

</script>
