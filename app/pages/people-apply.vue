<template lang="pug">

.content-page
    GO.back-link(to="/people")
        Icon(name="material-symbols:arrow-back")
        | Back

    .page-header
        h1.page-title Submit your profile

    .content-wrapper
        .content-card
            p Are you freely giving your ministry resources in obedience to Jesus' command? Consider submitting your profile to encourage others and help set a good example to follow.

        .content-card
            h2 Beliefs
            p This site is Protestant Evangelical in theology, and you must uphold the fundamental truths of the Christian faith, including:
            ul
                li #[strong God] is the only true god and exists in three persons, Father, Son, and Spirit
                li #[strong Sin] has left everyone subject to God's wrath and condemnation
                li #[strong Christ] became man, died and came back to life, and ascended to Heaven
                li #[strong Salvation] is through faith in Christ alone, who paid the penalty for our sins in his death
                li #[strong Scripture] is infallible as originally given and is our ultimate authority on knowing God and his will

        .content-card
            h2 Freely giving
            p You must also believe ministry should be freely given, and therefore #[em not]:
            ul
                li Sell ministry (or ministry resources)
                li Seek to profit from ministry
                li Require donations from recipients of ministry
                li Restrict the distribution, adaptation, or translation of ministry resources
                li Require users to see ads in order to access resources
                li Require users to hand over personal information (such as an email address)
            p This perspective is not what people commonly think about when they refer to "giving for free", so it's important you first #[GO(to='https://sellingjesus.org') familiarize yourself with the theology]. This freely giving ethic should apply to all aspects of your ministry, and not just parts of it.
            p While this site advocates for dedicating resources to the public domain, we recognize that others have different opinions on what should be considered "freely giving" and so those who openly license their resources (with BY or BY SA) are also featured.

        .content-card
            h2 Submit
            p In order to create a profile for you, the following information is needed:
            ul
                li Profile picture (minimum 360x360px)
                li Name
                li Title (e.g. "Founder of/pastor at/missionary in...")
                li Third-person mini bio
                li First-person quote about freely giving
                li Website URL (optional)
                li Do you have a Bachelor+ degree in theology or another relevant field? (optional)
            p The bio and quote should together be #[strong less than 120 words]. By submitting the picture and info, you agree to dedicate them to the public domain along with the rest of the website. You also agree to it being removed if your beliefs change or your conduct would bring disrepute on the site.
            p If all that sounds good, please submit your profile to Jon at Gracious Tech:
            p
                GO.btn-secondary(to='https://gracious.tech/contact') Contact Gracious Tech

        .content-card
            h2 Example
            CommittedPerson(id='jon_here')

</template>

<script setup>

definePageMeta({
    path: '/people/apply',
})

definePageMeta({
    title: "Submit your profile to Freely.Giving",
})

</script>

<style scoped lang="sass">
// All styles are now global in app/styles.sass
</style>
