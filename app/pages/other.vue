
<template lang="pug">

.content-page
    GO.back-link(to="/")
        Icon(name="material-symbols:arrow-back")
        | Back

    .page-header
        h1.page-title Other Resources
        h2.page-subtitle This page lists resources that don't fit into the common categories

    .content-wrapper
        .content-card
            h2 Biblical Language Study
            .resource-grid
                GO(to='https://freehebrew.online/') Aleph with Beth
                div Free videos for learning Biblical Hebrew
                GO(to='https://freegreek.online/') Alpha with Angela
                div Free videos for learning Biblical Greek
                GO(to='https://www.linguadeogloria.com/') Lingua Deo Gloria
                div Hebrew and Greek visual readers and more
                GO(to='https://tips.translation.bible/') Translation Insights &amp; Perspectives
                div Openly licensed commentary on the translation of bible verses
                GO(to='https://greekcntr.org/') Center for New Testament Restoration
                div New Testament manuscript research and tools

    .content-wrapper
        .content-card
            h2 Trainings
            .resource-grid
                GO(to='https://training.freely.giving/') Understanding Scripture
                div Resources for training groups in exegesis and theology
                GO(to='https://www.4training.net/') 4training.net
                div Discipleship resources in many different languages

    .content-wrapper
        .content-card
            h2 Articles
            .resource-grid
                GO(to='https://thingsabove.us/') Things Above Us
                div Public domain theological articles and reflections
                GO(to='https://unchangingword.com/') Unchanging Word
                div An online library of rational evidence for the reliability and validity of God's Word

    .other-buttons
        GO.btn-primary.small(to="/publish?type=other") Add your resource

</template>

<script setup>

useHead({
    title: "Other Free Christian resources",
})

</script>

<style scoped lang="sass">
</style>
