
<template lang="pug">

.content-page
    GO.back-link(to="/")
        Icon(name="material-symbols:arrow-back")
        | Back

    .page-header
        h1.page-title About Freely.Giving

    .content-wrapper
        .content-card
            h2 Purpose
            p This site is designed to be a starting place for believers to consider the idea of freely giving Christian resources, and a central location for discovering free resources.
            p While Christians often give free of cost, we need to also be giving #[strong free of copyright restrictions], so resources can be improved, adapted, and translated by anyone.

        .content-card
            h2 Creator
            p This website itself is a #[GO(to='https://gracious.tech') Gracious Tech] project. The various collections of free resources are maintained by their respective owners.

        .content-card
            h2 Donations
            p While we believe in supporting ministry, we've decided not to request donations for this particular project. We instead encourage everyone to financially support the various resources being freely given by others.

        .content-card
            h2 Beliefs
            p We are Reformed Evangelical in theology. However, content in the various collections of free resources will invariably be contributed by believers with different theological positions.

        .content-card
            h2 Copying
            p This website's content is dedicated to the public domain, and its #[GO(to='https://github.com/gracious-tech/freely.giving') code] has no conditions on its use.
            GO(to='https://copy.church/free')
                img(src='https://copy.church/badges/fg_standard_pd.svg' style='max-width: 360px; width: 100%;')

        .content-card
            h2 Contact
            p Please reach out to #[GO(to='https://gracious.tech/contact') Gracious Tech].

</template>

<script setup>

definePageMeta({
    title: "About Freely.Giving",
})

</script>

<style scoped lang="sass">
// All styles are now global in app/styles.sass
</style>
