
<template lang="pug">

.content-page
    GO.back-link(to="/")
        Icon(name="material-symbols:arrow-back")
        span Home

    .page-header
        h1.page-title Freely Given

    .content-wrapper
        .content-card
            p The person who associated a resource with this page has freely given it for the sake of the gospel (Matt 10:8). They have dedicated it to the public domain, waiving all copyright, so that it may be used without restriction.

            p This means you can:
            ul
                li
                    strong Copy
                    |  &mdash; Share and distribute the resource in whole or in part
                li
                    strong Modify
                    |  &mdash; Improve or adapt the resource to a new context
                li
                    strong Translate
                    |  &mdash; Make the resource available in a new language

            p You do not need to ask the original owner for permission. However, if you modify the resource, we recommend you:
            ul
                li Avoid implying it is endorsed by the author
                li Let people know where they can find the original
                li
                    GO(to="/publish") Freely give
                    |  your modified version

            GO.btn-secondary(to="/") Learn about freely giving

        .content-card.disclaimer-card
            h3 Legal details
            p The person who associated a work with this page has dedicated the work to the public domain by waiving all of their rights to the work worldwide under copyright law. They have done this using the #[GO(to='https://creativecommons.org/publicdomain/zero/1.0/legalcode') CC0 1.0 Universal legal code], which you should consult for more information.

            p This page itself has no legal value other than to signify that a rights holder has applied the CC0 to their work. All text is explanatory only and not part of the CC0 legal code. #[em freely.giving] is not a law firm and does not provide legal services. Distributing, displaying, or linking to this page does not create an attorney-client relationship. #[em freely.giving] has not verified the copyright status of any work to which this page has been applied. We make no warranties about any work or its copyright status in any jurisdiction, and disclaim all liability for all uses of any work.

</template>

<script setup>

useHead({
    title: "Freely Given",
})

</script>

<style scoped lang="sass">

.disclaimer-card
    background: rgba(200, 220, 255, 0.7)
    border-color: rgba(100, 150, 220, 0.6)

    h3
        font-size: 1.2rem
        margin: 0 0 12px 0

    p
        font-size: 0.95rem
        line-height: 1.6

</style>
