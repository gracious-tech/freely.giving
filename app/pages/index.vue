
<template lang="pug">

.home-container
    GO.about-link.nav-link(to="/about") About
    .hero-section
        .hero-titles
            h1.hero-title Freely giving
            h1.hero-title the things of God
            p.hero-quote “Freely you received, freely give.” &mdash; Jesus

        .intro-buttons
            GO.intro-btn(to="/why")
                .btn-content
                    h3 Why does it matter?
            GO.intro-btn(to="/questions")
                .btn-content
                    h3 Questions &amp; Answers

    .content-section.browse-section
        h2.section-title Browse freely given resources
        .resource-grid
            button.resource-card.gradient-books(@click="open_resource('books')")
                Icon.card-icon(name="material-symbols:auto-stories")
                span.card-label Books
            button.resource-card.gradient-music(@click="open_resource('music')")
                Icon.card-icon(name="material-symbols:music-note")
                span.card-label Music
            button.resource-card.gradient-videos(@click="open_resource('videos')")
                Icon.card-icon(name="material-symbols:play-circle")
                span.card-label Videos
            button.resource-card.gradient-images(@click="open_resource('images')")
                Icon.card-icon(name="material-symbols:image")
                span.card-label Images
            button.resource-card.gradient-software(@click="open_resource('software')")
                Icon.card-icon(name="material-symbols:apps")
                span.card-label Apps
            button.resource-card.gradient-scripture(@click="open_resource('scripture')")
                Icon.card-icon(name="fa7-solid:bible")
                span.card-label Bibles
            button.resource-card.gradient-other(@click="open_resource('other')")
                Icon.card-icon(name="material-symbols:auto-awesome-motion")
                span.card-label Other

        .other-buttons
            GO.btn-primary.small(to="/publish") Publish a free resource

    .content-section.people-section
        h2.section-title Meet who's freely giving
        .people-wrapper
            .people
                GO.person-image(v-for='person of people_ids_randomized' :key='person' :to='`/people#person_${person}`' @mouseenter='hovered_person = person' @mouseleave='hovered_person = null')
                    img(:src='`/people/${person}.webp`' :title='people[person].title')
            .person-card-overlay(v-if='hovered_person')
                CommittedPerson(:id='hovered_person')
        .other-buttons
            GO.btn-primary.small(to="/people") People
            GO.btn-primary.small(to="/groups") Groups

    BooksModal(:is_open="selected_resource === 'books'" @close="close_modal")
    VideosModal(:is_open="selected_resource === 'videos'" @close="close_modal")
    ImagesModal(:is_open="selected_resource === 'images'" @close="close_modal")
    MusicModal(:is_open="selected_resource === 'music'" @close="close_modal")
    SoftwareModal(:is_open="selected_resource === 'software'" @close="close_modal")
    ScriptureModal(:is_open="selected_resource === 'scripture'" @close="close_modal")
    OtherModal(:is_open="selected_resource === 'other'" @close="close_modal")

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { people, people_ids_randomized, randomize_people } from '@/components/people'
import CommittedPerson from '@/components/CommittedPerson.vue'

const selected_resource = ref<string | null>(null)
const hovered_person = ref<string | null>(null)

function open_resource(type: string) {
    selected_resource.value = type
}

function close_modal() {
    selected_resource.value = null
}

onMounted(() => {
    randomize_people()
})

</script>

<style scoped lang="sass">

.home-container
    min-height: 100vh
    padding: 40px 20px
    position: relative

.about-link
    position: absolute
    top: 20px
    right: 20px

    @media (max-width: 768px)
        top: 12px
        right: 12px

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

.intro-buttons
    display: flex
    justify-content: center
    align-items: center
    gap: 24px
    margin-top: 60px

.intro-btn
    background: transparent
    backdrop-filter: blur(10px)
    border: 2px solid rgba(255, 255, 255, 0.3)
    border-radius: 16px
    padding: 30px 20px
    width: 100%
    max-width: 400px
    text-decoration: none
    transition: all 0.3s ease
    cursor: pointer

    @media (max-width: 768px)
        padding: 24px

    &:first-child
        position: relative
        background: linear-gradient(135deg, #14b8838f 0%, rgba(56, 189, 248, 0.3) 100%)
        backdrop-filter: blur(12px)
        border: 1px solid rgba(255, 255, 255, 0.3)
        box-shadow: 0 6px 25px rgba(20, 184, 166, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)

        h3
            color: white
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)

        &::before
            content: ''
            position: absolute
            inset: -3px
            border-radius: 16px
            padding: 3px
            background: conic-gradient(from var(--angle), transparent 0deg, transparent 270deg, rgba(255, 255, 255, 0.5) 315deg, transparent 360deg)
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)
            -webkit-mask-composite: xor
            mask-composite: exclude
            animation: rotating-border 8s linear infinite
            pointer-events: none

        &:hover
            background: linear-gradient(135deg, #14b883cc 0%, rgba(56, 189, 248, 0.5) 100%)
            box-shadow: 0 8px 35px rgba(20, 184, 166, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)
            transform: translateY(-4px) scale(1.02)

    &:hover
        background: rgba(255, 255, 255, 0.25)
        border-color: rgba(255, 255, 255, 0.5)
        transform: translateY(-4px)
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2)

    h3
        margin: 0
        font-size: 1.3rem
        color: white
        font-weight: 600
        line-height: 1.4

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
    margin-bottom: 48px

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

    .intro-buttons
        flex-direction: column

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
    margin: 80px auto 40px

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

@property --angle
    syntax: '<angle>'
    initial-value: 0deg
    inherits: false

@keyframes rotating-border
    0%
        --angle: 0deg
    100%
        --angle: 360deg

</style>
