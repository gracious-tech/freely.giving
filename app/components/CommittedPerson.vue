
<template lang='pug'>

div.person(:id='`person_${id}`')

    div.identity
        img(:src='`/people/${id}.webp`')
        div.cred
            h3 {{ person.name }}
            h4 {{ person.title }}
            div.edu(v-if='person.education') {{ person.education }}
        GO.website(v-if='person.site' :to='person.site' title="Website")
            svg(viewBox='0 0 48 48')
                path(d='M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z')

    div.text
        p {{ person.bio }}
        p.quote #[span.q1 “]{{ person.quote }}#[span.q2 ”] {{ word_count }}

</template>


<script lang='ts' setup>

import {computed} from 'vue'

import {people} from './people'


const props = defineProps({id: String})

const person = computed(() => people[props.id])

const word_count = computed(() => {
    if (import.meta.dev){
        return (person.value.bio + ' ' + person.value.quote).split(' ').length
    }
    return ''
})

</script>


<style lang='sass' scoped>

.person
    background: rgba(255, 255, 255, 0.65)
    border-radius: 20px
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15)
    margin: 0
    font-size: 16px
    overflow: hidden

.text
    padding: 24px
    p
        font-size: 1.125rem
        line-height: 1.75
        color: #2a2a2a
        margin: 0 0 16px 0

        &:last-child
            margin-bottom: 0

.identity
    display: flex
    align-items: center

    img
        width: 180px
        height: 180px
        border-radius: 0 0 130px 0
        margin-right: 24px

.cred
    flex-grow: 1

    h3, h4
        margin: 0
        color: #1a1a1a

    h3
        font-size: 1.6rem
        font-weight: 700
        margin-bottom: 8px

    h4
        font-size: 1.125rem
        font-weight: 500
        opacity: 0.8

    .edu
        opacity: 0.7
        font-size: 0.9em
        margin-top: 12px

.website
    align-self: flex-start
    width: 48px
    height: 48px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    color: #0009
    transition: all 0.2s ease
    border-radius: 8px
    margin-top: 16px
    margin-right: 16px

    &:hover
        background: rgba(46, 93, 143, 0.1)

    svg
        width: 24px
        height: 24px
        fill: currentColor

.quote
    font-style: italic
    opacity: 0.8
    color: #2a2a2a

    span
        font-size: 2.2em
        opacity: 0.4
        font-weight: bold
        vertical-align: middle
        line-height: 0

        &.q1
            margin-right: 8px

        &.q2
            margin-left: 4px

@media (max-width: 768px)
    .person  // For override

        .identity
            img
                width: 100px
                height: 100px
                border-radius: 0 0 65px 0
                margin-right: 12px
            h3
                font-size: 18px
                margin-bottom: 4px

            h4
                font-size: 14px

            .edu
                margin-top: 4px
                font-size: 12px

        .website
            margin-top: 4px
            margin-right: 4px

        p
            font-size: 1rem

</style>
