
<template lang="pug">

ResourceModal(
    :is_open="is_open"
    :title="title"
    :icon="icon"
    :gradient_class="gradient_class"
    @close="$emit('close')"
)
    CollectionLink(
        url="https://faith.tools/open-source"
        description="Various Christian apps, with an open source category"
        badge="some restricted"
    ) faith.tools

    CollectionLink(
        url="https://github.com/meichthys/christian_foss"
        description="A list of open source software, including low level modules"
    ) Christian FOSS

</template>

<script setup lang="ts">

defineProps<{
    is_open: boolean
}>()

defineEmits<{
    close: []
}>()

const title = 'Apps'
const icon = 'material-symbols:apps'
const gradient_class = 'gradient-software'

</script>
