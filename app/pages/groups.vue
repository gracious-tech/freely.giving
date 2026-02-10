
<template lang="pug">

.content-page
    GO.back-link(to="/")
        Icon(name="material-symbols:arrow-back")
        | Back

    .page-header
        h1.page-title Groups
        h2.page-subtitle committed to freely giving

    .content-wrapper
        .content-card
            h2 Communities
            p Places you can find like-minded people who believe in freely giving resources.
            .resource-grid
                GO(to='https://discord.gg/TwZUsT2nJ7') Dorean Discussions
                div A Discord server for discussing freely giving according to the dorean principle.
                GO(to='https://discord.com/invite/auJb4H9ezx') Open Bible Technology Community
                div A Discord server for discussing openly licensed Bible software. Note: This community favors open licensing over the public domain (what this site recommends).

        .content-card
            h2 Organizations
            p These orgs are explicitly committed to releasing all of their resources free of cost and copyright restrictions.
            .resource-grid
                GO(to='https://greekcntr.org/') Betheden Ministries
                div Biblical language study tools
                GO(to='https://greekcntr.org/') Center for New Testament Restoration
                div New Testament manuscript research and tools
                GO(to='https://gracious.tech') Gracious Tech
                div Mission-focused apps
                GO(to='https://freely-given.org/') Freely-Given.org
                div Bible tools and resources
                GO(to='https://www.linguadeogloria.com/') Lingua Deo Gloria
                div Biblical Hebrew and Greek language learning
                GO(to='https://crosswire.org/') CrossWire Bible Society
                div Bible software
                GO(to='https://www.unfoldingword.org/') unfoldingWord
                div Bible translation



</template>

<script setup>

useHead({
    title: "Groups committed to freely giving Christian resources",
})

</script>

<style scoped lang="sass">


</style>
