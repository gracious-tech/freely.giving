
<template lang="pug">

.content-page
    GO.back-link(to='/' @click.prevent='back')
        Icon(name='material-symbols:arrow-back')
        | Back

    .page-header
        h1.page-title Dedicating to the Public Domain

    .content-wrapper

        PublicDomainQuestions


</template>


<script lang='ts' setup>

definePageMeta({
    path: '/questions/public-domain',
    title: "Dedicating Christian resources to the public domain",
})

function back(){
    window.history.back()
}

</script>


<style scoped lang="sass">
</style>
