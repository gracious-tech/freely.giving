
<template lang="pug">

.modal-overlay(v-if="is_open" @click="$emit('close')")
    .modal-card(@click.stop :class="gradient_class")
        button.close-btn(@click="$emit('close')") ×
        .modal-header
            Icon.modal-icon(:name="icon")
            h2.modal-title {{ title }}
        .modal-content
            slot

</template>

<script setup lang="ts">

defineProps<{
    is_open: boolean
    title: string
    icon: string
    gradient_class: string
}>()

defineEmits<{
    close: []
}>()

</script>

<style scoped lang="sass">

.modal-overlay
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: rgba(0, 0, 0, 0.7)
    backdrop-filter: blur(4px)
    display: flex
    align-items: center
    justify-content: center
    z-index: 1000
    animation: fade-in 0.3s ease
    padding: 20px
    overflow-y: auto

    @media (max-width: 768px)
        padding: 12px

.modal-card
    position: relative
    width: 90%
    max-width: 600px
    max-height: calc(100vh - 40px)
    border-radius: 24px
    padding: 48px
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3)
    animation: expand-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
    display: flex
    flex-direction: column
    margin: auto

    @media (max-width: 768px)
        padding: 32px 24px
        max-height: calc(100vh - 24px)
        border-radius: 16px
        margin: 12px auto

.close-btn
    position: absolute
    top: 16px
    right: 16px
    background: rgba(255, 255, 255, 0.2)
    border: none
    color: white
    font-size: 2rem
    width: 40px
    height: 40px
    min-width: 40px
    min-height: 40px
    border-radius: 50%
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    line-height: 1
    transition: all 0.2s ease
    flex-shrink: 0
    z-index: 10
    padding: 0

    @media (max-width: 768px)
        width: 32px
        height: 32px
        min-width: 32px
        min-height: 32px
        font-size: 1.5rem
        top: 12px
        right: 12px

    &:hover
        background: rgba(255, 255, 255, 0.3)
        transform: scale(1.1)

.modal-header
    text-align: center
    margin-bottom: 40px
    flex-shrink: 0

    @media (max-width: 768px)
        margin-bottom: 24px

.modal-icon
    font-size: 5rem
    color: rgba(255, 255, 255, 0.9)
    margin-bottom: 16px

    @media (max-width: 768px)
        font-size: 3.5rem
        margin-bottom: 12px

.modal-title
    font-size: 2.5rem
    font-weight: 700
    color: white
    margin: 0
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3)

    @media (max-width: 768px)
        font-size: 1.8rem

.modal-content
    display: flex
    flex-direction: column
    gap: 16px
    overflow-y: auto
    overflow-x: hidden
    flex: 1
    min-height: 0

    @media (max-width: 768px)
        gap: 12px

    :deep(.disclaimer)
        margin-top: 32px
        padding-top: 24px
        border-top: 1px solid rgba(255, 255, 255, 0.2)
        color: rgba(255, 255, 255, 0.85)
        font-size: 18px
        line-height: 1.6
        text-align: center
        font-style: italic

@keyframes fade-in
    from
        opacity: 0
    to
        opacity: 1

@keyframes expand-in
    from
        opacity: 0
        transform: scale(0.3)
    to
        opacity: 1
        transform: scale(1)

</style>
