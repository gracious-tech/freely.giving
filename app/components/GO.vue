
<template lang="pug">

NuxtLink(:to="to" v-bind='custom_props')
    slot

</template>

<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps<{
    to: string
}>()

const target = computed(() => {
    if (props.to.startsWith('http://') || props.to.startsWith('https://')){
        return '_blank'
    }
    return
})

const custom_props = computed(() => {
    if (target.value){
        return {target: target.value, ...props}
    }
    return {...props}
})

</script>

<style scoped lang="sass">

</style>
