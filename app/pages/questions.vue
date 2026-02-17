
<template lang="pug">

.content-page
    GO.back-link(to="/")
        Icon(name="material-symbols:arrow-back")
        | Back

    .page-header
        h1.page-title Questions &amp; Answers

    .content-wrapper

        .content-card
            h2 What do you mean by “free”?
            p We mean free of cost #[strong and copyright restrictions].
            p There are many Christian resources that are given free of cost, but such resources are still forbidden from being copied, translated, or adapted. This prevents much of the world from benefiting from them, especially the least reached. Giving resources free of such restrictions allows believers to use them in helpful ways the original authors may have never thought of.

        .content-card
            h2 What kinds of things should be freely given?
            p We encourage freely giving all things that are primarily spiritual in nature, things designed to help others to grow in their faith. This includes:
            ul
                li Bible translations
                li Sermons and conference talks
                li Books
                li Worship music
            p #[strong This doesn't mean printed books need to be free.] What matters is that people can access the teaching, which can be done by offering the ebook for free. Giving away printed books can also be valuable, especially for evangelism, but it isn’t expected.

            p #[strong This also doesn't mean everything “Christian” needs to be free.] This only concerns things that are #[em primarily] spiritual in nature. This #[strong doesn't] include:
            ul
                li Christian t-shirts
                li Songs influenced by someone's faith
                li Talks on secular topics that cite a bit of Scripture

        .content-card
            h2 Are you saying people shouldn't be paid for their work?
            p Not at all, the Bible affirms it's appropriate to receive wages for the work of ministry. But pastors and missionaries receive those wages through donations rather than sales. We believe that is the best model for Christian resources too, so that they remain free for all.
            p
                GO.btn-secondary(to='/funding') How to fund

        .content-card
            h2 Is it really feasible to rely on donations alone?
            p Yes, hundreds of thousands of pastors and missionaries currently rely on donations alone for their ministry. While there hasn't been a strong culture of doing this for Christian resources, we're hoping to encourage change so that it does become the norm.

        .content-card
            h2 What does the Bible say?
            p The Lord Jesus has freely given us his life (Rom 3:24), and freely given us spiritual truths about him (1 Cor 2:12-13), which we express in the resources we create.
            p Since we have freely received these things, it is appropriate to freely pass them on. Which is what Jesus instructed his disciples to do in their own ministry:
            blockquote “As you go, preach this message: ‘The kingdom of heaven is near.’ Heal the sick, raise the dead, cleanse the lepers, drive out demons. Freely you have received; freely give.” (Matt&nbsp;10:7-8)
            p If you'd like to explore more about what the Bible has to say about freely giving ministry, #[em Selling Jesus] is a website dedicated to the topic that argues: "Ministry should be supported, not sold."
            p
                GO.btn-secondary(to='https://sellingjesus.org') Selling Jesus

        .content-card
            h2 How can I help?
            p Aside from freely giving any Christian resources you've created, please consider simply sharing this website with your church and friends! We recommend sharing #[GO(to='/why') our introduction page] to start with.

        h2.mid Dedicating to the Public Domain

        PublicDomainQuestions

        h2.mid More info

        .content-card
            h2 How can I publish a resource I made?
            p
                GO.btn-secondary(to='/publish') Publish a free resource

        .content-card
            h2 How can I fund my ministry?
            p
                GO.btn-secondary(to='/funding') How to fund

        .content-card
            h2 Who is behind this website?
            p
                GO.btn-secondary(to='/about') About freely.giving


</template>

<script setup>

definePageMeta({
    title: "Questions about freely giving Christian resources",
})

</script>

<style scoped lang="sass">

h2.mid
    color: white
    margin-top: 48px

</style>
