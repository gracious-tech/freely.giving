
<template lang="pug">

ResourceModal(
    :is_open="is_open"
    :title="title"
    :icon="icon"
    :gradient_class="gradient_class"
    @close="$emit('close')"
)
    CollectionLink(
        url="/other"
        description="Trainings, websites, and more"
    ) Other Resources

</template>

<script setup lang="ts">

defineProps<{
    is_open: boolean
}>()

defineEmits<{
    close: []
}>()

const title = 'Other'
const icon = 'material-symbols:auto-awesome-motion'
const gradient_class = 'gradient-other'

</script>
