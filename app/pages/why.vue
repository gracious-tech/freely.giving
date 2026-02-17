
<template lang='pug'>

nav.nav-back
    GO.nav-link(to='/') freely.giving

.why-page
    h1.main-title Why Freely Give
    h2.subtitle Christian Resources?

    .sections
        section.section.icon-left
            .section-number
                span.number 1
                span.total /8
            .icon.custom-icon
                img(src="~/assets/icon_church.svg")
            .text
                p All Christians know you shouldn’t have to pay to enter a church or hear the gospel from a missionary, even though these things require significant labor to provide.

        section.section.icon-right
            .section-number
                span.number 2
                span.total /8
            .text
                p Pastors and missionaries are still worthy of wages, but they only receive these through donations to ensure the ministry stays free.
            .icon
                Icon(name="streamline-freehand:donation-charity-donate-box")

        section.section.icon-left
            .section-number
                span.number 3
                span.total /8
            .icon
                Icon(name="streamline-freehand:tag-sale-price")
            .text
                p However, this isn't the case for all forms of ministry. Many things, such as books, worship music, and conference talks, rely on sales rather than donations.
                p Most authors do this with the best of intentions, believing it to be the most effective way to fund ministry. However, there are downsides.

        section.section.icon-right
            .section-number
                span.number 4
                span.total /8
            .text
                p These downsides are evident when imagining if churches were to rely on sales rather than donations. Such as by charging entrance fees.
                p The poor would be disadvantaged, and would have to ask for special permission to enter for free. Those yet to believe might be put off by the cost, and even long-time Christians may reduce attendance to save some money.
            .icon
                Icon(name="streamline-freehand:accounting-invoice")

        section.section.icon-left
            .section-number
                span.number 5
                span.total /8
            .icon
                Icon(name="streamline-freehand:laptop-action-lock")
            .text
                p That's unfortunately what is happening with many Christian resources today. The poor are disadvantaged and the potential impact of resources is reduced by financial barriers.

        section.section.icon-right
            .section-number
                span.number 6
                span.total /8
            .text
                p Worse still, the least reached are most affected. They can't afford the abundant Christian resources the West enjoys, and don't have permission to translate them due to copyright restrictions.
            .icon
                Icon(name="streamline-freehand:worldwide-web-location-pin")

        section.section.icon-left
            .section-number
                span.number 7
                span.total /8
            .icon
                Icon(name="streamline-freehand:business-cash-idea")
            .text
                p What if we instead used the model most churches and missionaries use today #[strong for all Christian resources]? Raising donations rather than charging fees.
                p Even if it were not feasible to give physical books for free, simply releasing them from copyright would allow free digital distribution and translation.

        img.impact(src='/illustrations/impact.svg')

        section.section.icon-right
            .section-number
                span.number 8
                span.total /8
            .text
                p This might involve some sacrifice, just as many missionaries joyfully persevere through funding shortfalls today.
                p But we should take encouragement from the Lord who gave his life freely for us, and told his disciples:
                p
                    em “Freely you received, freely give.” (Matt&nbsp;10:8)
            .icon.custom-icon
                img(src="~/assets/icon_giving.svg")

    .final-cta
        p.cta-text Let's make it the norm to freely give Christian resources, for the sake of the gospel.
        GO.btn-primary(to='/') Learn More

</template>


<script lang='ts' setup>


definePageMeta({
    title: "Why freely give Christian resources?",
    description: "Let's make it the norm to freely give Christian resources, for the sake of the gospel.",
    image: 'https://freely.giving/social_why.jpg',
})

</script>


<style scoped lang="sass">
.nav-back
    position: absolute
    top: 20px
    right: 20px

    @media (max-width: 768px)
        top: 12px
        right: 12px

.why-page
    max-width: 1000px
    margin: 0 auto
    padding: 60px 20px 20px 20px

.main-title
    font-size: 5rem
    font-weight: bold
    text-align: center
    color: white
    margin-bottom: 24px
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)

.subtitle
    font-size: 3.5rem
    font-weight: 300
    text-align: center
    color: white
    margin-top: 0
    margin-bottom: 200px
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)

.sections
    display: flex
    flex-direction: column
    gap: 200px
    align-items: center

.section
    display: flex
    gap: 60px
    align-items: center

.section-number
    left: 20px
    color: rgba(255, 255, 255, 0.4)
    font-weight: 300
    line-height: 1

    .number
        font-size: 3rem

    .total
        font-size: 1.5rem
        margin-left: 2px

.section.icon-right
    grid-template-columns: 2fr 1fr

.icon
    font-size: 15rem
    text-align: center
    line-height: 1
    color: white

.section:nth-child(2) .icon
    color: #2196f3cc

.section:nth-child(3) .icon
    color: #ff5144cc

.section:nth-child(4) .icon
    color: #00000099

.section:nth-child(5) .icon
    color: #ff6100cc

.section:nth-child(6) .icon
    color: #21bd27cc

.section:nth-child(7) .icon
    color: #ffd700cc


.custom-icon img
    width: 15rem
    height: 15rem
    object-fit: contain

.text
    p
        font-size: 2rem
        font-weight: 300
        color: white
        line-height: 1.6

        strong
            font-weight: 700

.final-cta
    text-align: center
    margin-top: 200px

    .cta-text
        font-size: 2.5rem
        font-weight: 500
        color: white
        line-height: 1.5
        margin-bottom: 40px
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)

.impact
    width: 100%
    max-width: 800px

@media (max-width: 768px)

    .nav-link
        font-size: 14px

    .main-title
        font-size: 2.5rem
        margin-bottom: 24px

    .subtitle
        margin-bottom: 48px
        font-size: 24px

    .section
        display: grid
        grid-template-columns: 1fr 1fr !important
        grid-template-rows: auto auto
        gap: 0px 36px
        align-items: center
        justify-content: center

    .section-number
        text-align: right
        grid-column: 1
        grid-row: 1

    .section .icon
        text-align: left
        grid-column: 2
        grid-row: 1

    .section .text
        grid-column: 1 / -1
        grid-row: 2

    .sections
        gap: 60px

    .icon
        font-size: 5rem

    .custom-icon img
        width: 80px
        height: 80px

    .text p
        font-size: 1.2rem
        text-align: center

    .final-cta
        margin-top: 64px

    .cta-text
        font-size: 20px !important
</style>
