
<template lang='pug'>

.content-page
    GO.back-link(to="/")
        Icon(name="material-symbols:arrow-back")
        | Back

    .page-header
        h1.page-title Meet who's freely giving
        p.page-subtitle Many believers are already freely giving their resources.<br>Here's just some of them...

    .content-wrapper
        CommittedPerson(v-for='id of people_ids_randomized' :key='id' :id='id')

    .submit-card
        h2 Are you also freely giving?
        p
            GO.btn-primary.small(to='/people/apply') Submit your profile

</template>

<script lang='ts' setup>

import {onMounted} from 'vue'

import {people_ids_randomized, randomize_people} from '@/components/people'

useHead({
    title: "People freely giving Christian resources",
})

onMounted(() => {
    randomize_people()
})

</script>

<style lang='sass' scoped>

.submit-card
    text-align: center
    color: white
    margin-top: 50px

    h2
        margin-bottom: 24px

    p
        margin-bottom: 24px

        &:last-of-type
            margin-bottom: 0
</style>
