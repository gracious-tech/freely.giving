
<template lang="pug">

.home-container
    .hero-section
        .hero-titles
            h1.hero-title Freely giving
            h1.hero-title the things of God
            p.hero-quote “Freely you received, freely give.” #[span.quote-author &mdash; Jesus]

        IntroVideo.intro-video

        .other-buttons
            GO.btn-primary(to="/questions") Questions &amp; Answers

    .content-section.browse-section
        h2.section-title Browse freely given resources
        .resource-grid
            GO.resource-card(
                v-for="category of resource_categories"
                :key="category.id"
                :class="category.gradient_class"
                :to="`/browse#${category.id}`"
            )
                Icon.card-icon(:name="category.icon")
                span.card-label {{ category.title }}


    .content-section.people-section
        h2.section-title Meet who's freely giving
        .people-wrapper
            .people
                GO.person-image(v-for='person of people_ids_randomized' :key='person' :to='`/people#person_${person}`' @mouseenter='hovered_person = person' @mouseleave='hovered_person = null')
                    img(:src='`/people/${person}.webp`' :title='people[person].title')
            .person-card-overlay(v-if='hovered_person')
                CommittedPerson(:id='hovered_person')

    div.about
        GO.nav-link(to="/about") About
        GO.facebook(to='https://www.facebook.com/freely.giving.website')
            img(src="~/assets/icon_facebook.svg" alt="Facebook")

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { people, people_ids_randomized, randomize_people } from '@/components/people'
import CommittedPerson from '@/components/CommittedPerson.vue'
import { resource_categories } from '@/components/resources'

const hovered_person = ref<string | null>(null)

onMounted(() => {
    randomize_people()
})

</script>

<style scoped lang="sass">

.home-container
    min-height: 100vh
    padding: 40px 20px
    position: relative

.about
    display: flex
    align-items: center
    justify-content: center
    border-top: 1px solid #fff2
    padding-top: 12px
    width: 200px
    margin: 120px auto 0 auto

    .facebook
        border-radius: 999px
        padding: 12px
        line-height: 0
        &:hover
            background-color: #fff2
        img
            width: 20px
            height: 20px

.hero-section
    text-align: center
    padding: 60px 20px 80px
    max-width: 900px
    margin: 0 auto

.hero-titles
    position: relative

    &::before
        position: absolute
        content: ''
        top: -20px
        left: -180px
        width: 300px
        height: 300px
        background-image: url('~/assets/background_gift.svg')
        background-repeat: no-repeat
        background-size: contain
        opacity: 0.05
        pointer-events: none

        @media (max-width: 1000px)
            display: none

    &::after
        position: absolute
        content: ''
        top: -20px
        right: -180px
        width: 300px
        height: 300px
        background-image: url('~/assets/background_hand.svg')
        background-repeat: no-repeat
        background-size: contain
        opacity: 0.05
        pointer-events: none

        @media (max-width: 1000px)
            display: none

.hero-title
    font-size: clamp(3rem, 8vw, 6rem)
    font-weight: 700
    color: white
    margin: 0
    line-height: 1.2
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3)

    &:nth-child(2)
        font-size: clamp(2rem, 6vw, 4rem)
        font-weight: 400

.hero-quote
    font-size: clamp(1.1rem, 3vw, 1.5rem)
    color: rgba(255, 255, 255, 0.95)
    margin: 40px 0 0
    font-style: italic
    font-weight: 300
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2)

// Put the attribution on its own line on phones
.quote-author
    @media (max-width: 768px)
        display: block
        margin-top: 4px

.intro-video
    margin-top: 120px  // Matches the gap below the hero section

.content-section
    max-width: 900px
    margin: 40px auto
    padding: 0 20px

.section-title
    font-size: 2rem
    color: white
    font-weight: 700
    text-align: center
    margin: 0 0 50px 0
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3)

.section-subtitle
    font-size: 1.15rem
    color: white
    font-weight: 400
    text-align: center
    margin: -24px 0 60px 0
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2)

.resource-grid
    display: flex
    justify-content: center
    gap: 60px
    flex-wrap: wrap
    max-width: 1000px
    margin: 0 auto

.resource-card
    border-radius: 50%
    width: 140px
    height: 140px
    border: none
    text-decoration: none
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    transition: all 0.3s ease
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15)
    cursor: pointer
    opacity: 0
    transform: scale(0)
    animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, float 6s ease-in-out infinite

    &:nth-child(1)
        animation-delay: 0.0s, 0s
    &:nth-child(2)
        animation-delay: 0.1s, 0.5s
    &:nth-child(3)
        animation-delay: 0.2s, 1s
    &:nth-child(4)
        animation-delay: 0.3s, 1.5s
    //- Delay for second row (not relevant for mobile)
    &:nth-child(5)
        animation-delay: 0.4s, 0.5s
    &:nth-child(6)
        animation-delay: 0.5s, 1s
    &:nth-child(7)
        animation-delay: 0.6s, 1.5s

    &:hover
        transform: translateY(-6px) scale(1.05)
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25)
        animation-play-state: paused
        z-index: 10

.card-icon
    font-size: 3.5rem
    color: rgba(255, 255, 255, 0.9)
    margin-top: -8px

.card-label
    font-size: 0.95rem
    font-weight: 600
    color: white
    text-align: center
    line-height: 1.2
    margin-top: 8px
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3)
    padding: 0 12px

@media (max-width: 768px)
    .resource-grid
        gap: 20px

    .resource-card
        animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards

@media (max-width: 480px)
    .resource-grid
        gap: 16px

    .resource-card
        width: 120px
        height: 120px

    .card-icon
        font-size: 3.5rem

    .card-label
        font-size: 0.85rem

@keyframes pop-in
    0%
        opacity: 0
        transform: scale(0)
    60%
        transform: scale(1.1)
    100%
        opacity: 1
        transform: scale(1)

@keyframes float
    0%, 100%
        transform: translateY(0px)
    50%
        transform: translateY(-12px)

.people-section
    margin: 120px auto 40px  // Same gap as between the other home page sections

.people-wrapper
    position: relative

.people
    display: flex
    flex-wrap: wrap
    gap: 24px
    align-items: center
    justify-content: center
    margin: 0 auto
    max-width: 600px

.person-image
    text-align: center
    text-decoration: none
    transition: all 0.3s ease
    display: block

    img
        border-radius: 50%
        width: 64px
        height: 64px
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3)
        transition: all 0.3s ease

    @media (hover: hover)
        &:hover img
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5)
            transform: scale(1.05)

.person-card-overlay
    position: absolute
    bottom: calc(100% + 20px)
    left: 50%
    transform: translateX(-50%)
    z-index: 100
    max-width: 800px
    width: 90%
    margin-bottom: 16px
    animation: fade-scale-in 0.3s ease-out
    pointer-events: none

    @media (hover: none)
        display: none

    :deep(.person)
        background-color: white

        .website
            display: none

    @media (max-width: 480px)
        width: 95%

@keyframes fade-scale-in
    from
        opacity: 0
        transform: translateX(-50%) scale(0.95)
    to
        opacity: 1
        transform: translateX(-50%) scale(1)

</style>
