
<template lang="pug">

.content-page
    GO.back-link(to="/questions")
        Icon(name="material-symbols:arrow-back")
        | Back

    .page-header
        h1.page-title How to Fund
        p.page-subtitle Freely giving resources does not mean you can't receive any funding for them. Churches have been funded purely through donations for thousands of years.

    .content-wrapper
        .content-card
            h2 Setup a donations box
            p If you give away resources in-person, simply place an empty box nearby to collect cash donations. You may also want to display a page with bank account details for those who don't carry cash on them.

        .content-card
            h2 Seek funding from your church
            p Ask your church or a group of churches to fund a project. If it is missional in nature then the church might consider allocating some of its funds for mission toward it.
            p Alternatively, they might let you make an appeal to the congregation for funding, and collect payment through their existing system for offerings.

        .content-card
            h2 Accept online donations
            p You can very easily and quickly setup a link to a donation form using a service like #[GO(to='https://www.paypal.com/donate/buttons') PayPal donate]. Donors click the link and are taken to a secure payment form, with the funds deposited into your chosen bank account.

        .content-card
            h2 Use a crowdfunding platform
            p Crowdfunding platforms are popular for raising money for a project. They are more social in nature, often publicly displaying donations and donor names. They are also more goal oriented. This may be suitable for some projects more than others.
            p An example would be #[GO(to='https://www.gofundme.com/') GoFundMe]. We don't recommend the popular Patreon platform as they take at least 11% from donations (other platforms are usually 2%-5%).

        .content-card
            h2 Use cost-effective distribution
            p New technology has made it easier and more cost-effective than ever to distribute resources:
            ul
                li Publish ebooks for free and only charge for printed books
                li Host conferences online or at a church, rather than an expensive venue
                li Pay staff a reasonable stipend rather than industry standard salaries
                li Create static apps that don't require an expensive server

        .content-card
            h2 Self-fund
            p If you're able, you may choose to simply cover the costs yourself. Investing not just your time, but your money as well, for the sake of the gospel.

        .content-card
            h2 Wait for Jesus
            p “Behold, I am coming soon, and my reward is with me, to give to each one according to what he has done.” &mdash; Revelation 22:12


</template>

<script setup>

useHead({
    title: "How to fund free Christian resources",
})

</script>

<style scoped lang="sass">

</style>
