
<template lang="pug">

.content-page
    GO.back-link(to="/")
        Icon(name="material-symbols:arrow-back")
        span Home

    .page-header
        h1.page-title Publish a Free Resource

    .content-wrapper
        .media-grid
            button.media-bubble.gradient-books(@click="select_media('books')" :class="{ active: selected_media === 'books' }")
                Icon.bubble-icon(name="material-symbols:auto-stories")
                span.bubble-label Books
            button.media-bubble.gradient-music(@click="select_media('music')" :class="{ active: selected_media === 'music' }")
                Icon.bubble-icon(name="material-symbols:music-note")
                span.bubble-label Music
            button.media-bubble.gradient-videos(@click="select_media('videos')" :class="{ active: selected_media === 'videos' }")
                Icon.bubble-icon(name="material-symbols:play-circle")
                span.bubble-label Videos
            button.media-bubble.gradient-images(@click="select_media('images')" :class="{ active: selected_media === 'images' }")
                Icon.bubble-icon(name="material-symbols:image")
                span.bubble-label Images
            button.media-bubble.gradient-software(@click="select_media('software')" :class="{ active: selected_media === 'software' }")
                Icon.bubble-icon(name="material-symbols:apps")
                span.bubble-label Software
            button.media-bubble.gradient-scripture(@click="select_media('scripture')" :class="{ active: selected_media === 'scripture' }")
                Icon.bubble-icon(name="fa7-solid:bible")
                span.bubble-label Bibles
            button.media-bubble.gradient-other(@click="select_media('other')" :class="{ active: selected_media === 'other' }")
                Icon.bubble-icon(name="material-symbols:auto-awesome-motion")
                span.bubble-label Other

        p.prompt-message(v-if="!selected_media") What type of resource are you publishing?

        template(v-if="selected_media")
            .content-card
                h2 Step 1: Remove all copyright restrictions
                PublicDomain(:category='selected_media')

            .content-card
                h2 Step 2: Upload your source files
                p(v-if='selected_media !== "scripture"') Make sure there is at least one place where people can find useful source or intermediary files, and not just the final product. These make it easier for people to adapt or translate your resource.
                PrepareBooks(v-if="selected_media === 'books'")
                PrepareVideos(v-else-if="selected_media === 'videos'")
                PrepareImages(v-else-if="selected_media === 'images'")
                PrepareMusic(v-else-if="selected_media === 'music'")
                PrepareScripture(v-else-if="selected_media === 'scripture'")
                PrepareSoftware(v-else-if="selected_media === 'software'")
                PrepareOther(v-else-if="selected_media === 'other'")

            .content-card
                h2 Step 3: Share your resource
                ShareBooks(v-if="selected_media === 'books'")
                ShareVideos(v-else-if="selected_media === 'videos'")
                ShareImages(v-else-if="selected_media === 'images'")
                ShareMusic(v-else-if="selected_media === 'music'")
                ShareScripture(v-else-if="selected_media === 'scripture'")
                ShareSoftware(v-else-if="selected_media === 'software'")
                ShareOther(v-else-if="selected_media === 'other'")

                template(v-if='selected_media !== "scripture"')
                    p
                        strong Consider also sharing on:
                    ul
                        li Your personal social media profiles
                        li Your church's group chats
                        li Communities relevant to the topic (like Facebook groups and Reddit)
                        li Podcasts that may find it relevant

            .freed
                img(src='/illustrations/party.webp')

</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

definePageMeta({
    title: "How to publish free Christian resources",
})

const route = useRoute()
const router = useRouter()

const selected_media = ref<string | null>(null)

function select_media(media: string) {
    if (selected_media.value === media) {
        selected_media.value = null
        router.push({ query: {} })
    } else {
        selected_media.value = media
        router.push({ query: { type: media } })
    }
}

onMounted(() => {
    const type = route.query.type as string
    if (type) {
        selected_media.value = type
    }
})

watch(() => route.query.type, (new_type) => {
    if (new_type) {
        selected_media.value = new_type as string
    } else {
        selected_media.value = null
    }
})

</script>

<style scoped lang="sass">

.page-subtitle
    opacity: 0.9

.placeholder-text
    color: #666
    font-style: italic

.selection-title
    font-size: 2rem
    color: white
    font-weight: 700
    text-align: center
    margin: 0 0 16px 0
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3)

.selection-subtitle
    font-size: 1.125rem
    color: rgba(255, 255, 255, 0.95)
    text-align: center
    margin: 0 0 40px 0
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2)

.prompt-message
    font-size: 2rem
    color: rgba(255, 255, 255, 0.85)
    text-align: center
    margin: -40px 0 40px 0
    font-style: italic
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2)
    font-weight: bold

.media-grid
    display: flex
    justify-content: center
    gap: 18px
    flex-wrap: wrap
    max-width: 1000px
    margin: 0 auto 80px

    @media (max-width: 480px)
        gap: 16px

.media-bubble
    border-radius: 50%
    width: 98px
    height: 98px
    border: none
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    transition: all 0.3s ease
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15)
    cursor: pointer
    opacity: 1

    &:not(.active)
        .media-grid:has(.active) &
            opacity: 0.5

    &:hover
        transform: scale(1.05)
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25)

    &.active
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5), 0 8px 30px rgba(0, 0, 0, 0.3)

    @media (max-width: 480px)
        width: 80px
        height: 80px

.bubble-icon
    font-size: 2.5rem
    color: rgba(255, 255, 255, 0.9)
    margin-top: -4px

    @media (max-width: 480px)
        font-size: 2rem

.bubble-label
    font-size: 0.8rem
    font-weight: 600
    color: white
    text-align: center
    line-height: 1.2
    margin-top: 4px
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3)
    padding: 0 8px

    @media (max-width: 480px)
        font-size: 0.7rem


.content-card :deep(h3)
    margin-top: 24px

.freed
    display: flex
    flex-direction: column
    gap: 36px
    align-items: center
    margin-top: 48px
    img
        width: 160px

</style>
