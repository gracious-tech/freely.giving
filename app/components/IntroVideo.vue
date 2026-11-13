
<template lang="pug">

.intro-video
    //- Dots sit behind the player, so they are covered once it appears
    .video-loading(v-if="!loaded" aria-hidden="true")
        span
        span
        span
    iframe(
        src="https://lets.church/embed/media/gMMfb2W8BFbiTSoQrvaC9E"
        allowfullscreen
        allow="fullscreen; picture-in-picture"
        @load="loaded = true"
    )

</template>

<script setup lang="ts">

// Whether the embedded player has finished loading
const loaded = ref(false)

</script>

<style scoped lang="sass">

.intro-video
    position: relative
    width: 100%
    line-height: 0
    border-radius: 12px
    background: rgba(34, 34, 34, 0.5)  // Shown while the video player loads
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3)

    iframe
        position: relative

    // Span the full screen width on phones, ignoring the page's side padding
    @media (max-width: 768px)
        width: 100vw
        margin-left: calc(50% - 50vw)
        border-radius: 0

        iframe
            border-radius: 0

.video-loading
    position: absolute
    inset: 0
    display: flex
    align-items: center
    justify-content: center
    gap: 10px

    span
        width: 12px
        height: 12px
        border-radius: 50%
        background: rgba(255, 255, 255, 0.8)
        animation: loading-dot 1.2s ease-in-out infinite

        &:nth-child(2)
            animation-delay: 0.2s
        &:nth-child(3)
            animation-delay: 0.4s

@keyframes loading-dot
    0%, 80%, 100%
        opacity: 0.25
        transform: scale(0.8)
    40%
        opacity: 1
        transform: scale(1)

</style>
