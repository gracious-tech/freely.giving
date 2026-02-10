
<template lang="pug">

ResourceModal(
    :is_open="is_open"
    :title="title"
    :icon="icon"
    :gradient_class="gradient_class"
    @close="$emit('close')"
)
    CollectionLink(
        url="https://books.freely.giving/"
        description="Books with free downloads and on-demand printing"
    ) Freely Given Books
    p.disclaimer There are currently very few books available for free distribution. Please pray for more authors to be convicted of the importance of freely giving.

</template>

<script setup lang="ts">

defineProps<{
    is_open: boolean
}>()

defineEmits<{
    close: []
}>()

const title = 'Books'
const icon = 'material-symbols:auto-stories'
const gradient_class = 'gradient-books'

</script>

<style scoped lang="sass">


</style>
