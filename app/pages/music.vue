
<template lang="pug">

.content-page
    GO.back-link(to="/")
        Icon(name="material-symbols:arrow-back")
        | Back

    .page-header
        h1.page-title Freely Given Music
        h2.page-subtitle This is a temporary listing of modern Christian music that is free from copyright restrictions. We pray that there will one day be a modern platform with hundreds of artists convicted to freely give their music.

    .content-wrapper
        .content-card
            h2 Artists
            .resource-grid
                GO(to='https://hismagnificence.com/music/') Andrew Case
                div Contemporary worship in English and Hebrew
                GO(to='https://dancogan.bandcamp.com/album/giver-of-life') Dan Michael Cogan
                div Contemporary Christian
                GO(to='https://drfeezell.com/drfeezell-com/music/') Mark Feezell
                div Christian compositions and arrangements
                GO(to='https://www.khmerworship.com/artists/1145388') Kevin Kwon
                div Worship songs
            p &nbsp;
            p Relinquishing copyright in Christian music is still very rare. Be one of the first!

    .other-buttons
            GO.btn-primary.small(to="/publish?type=music") Add your music

</template>

<script setup>

useHead({
    title: "Freely Given Christian Music",
})

</script>

<style scoped lang="sass">
</style>
