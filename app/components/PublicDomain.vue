
<template lang='pug'>

p
    span(v-if='category !== "software"') Add this badge to your resource to permanently relinquish all rights to it.
    span(v-else) Add an #[GO(to='https://choosealicense.com/licenses/mit-0/') MIT-0 license] file to your source code, as it is the equivalent of public domain and avoids #[GO(to='https://en.wikipedia.org/wiki/Public-domain-equivalent_license') issues with patents].
    |  Ensure you #[GO(to='/questions/public-domain') understand the implications] of this, as it cannot be undone.

div.badge
    GO(:to='license_url' target='license')
        img(:src='badge_url')

    div.width ← &nbsp; {{ badge_width }} recommended &nbsp; →

    p.links
        button.btn(@click='copy_badge' :class='{ copied: badge_copied, failed: badge_failed }' style='width:140px')
            span(v-if='badge_copied') ✓
            span(v-else-if='badge_failed') didn't work :(
            span(v-else) Copy badge
        GO.btn(:to='badge_url' style='width:120px' download='badge.png' target='badge') Download
        GO(to='https://copy.church/dedicate/') more options

p
    span(v-if='category === "books"') Paste it into the first page of your book, where a copyright notice would usually go.
    span(v-else-if='category === "music"') Paste it in the description of your songs, wherever they are able to be downloaded or listened to.
    span(v-else-if='category === "images"') Paste it in the description of your images, wherever they are able to be viewed or downloaded. It is not necessary to include it in the image itself.
    span(v-else-if='category === "videos"') Paste it in the description of your video, wherever it is able to be watched or downloaded. You may also like to put it at the end of your video if appropriate.
    span(v-else-if='category === "software"') If you're using MIT-0 or another license that doesn't require attribution or any other condition, you can put this badge in your software's README file to encourage others to freely give too.
    span(v-else-if='category === "scripture"') Paste it in the description of your translation, wherever it is able to be read or downloaded.
    span(v-else) Paste it either inside your resource or next to any links to download it.
    span(v-if='category !== "software"')  If you can't add the badge, write "Dedicated to the public domain via CC0" instead.

div.also &mdash; AND &mdash;

p.link-instr Add this link to the badge (or paste it below it)

.links
    span.url {{ license_url }}
    button.btn(@click='copy_link' :class='{ copied: link_copied, failed: link_failed }' style='width:80px')
        span(v-if='link_copied') ✓
        span(v-else-if='link_failed') didn't work :(
        span(v-else) Copy


</template>


<script lang='ts' setup>

import {ref, computed} from 'vue'

const {category} = defineProps<{category:'books'|'music'|'videos'|'images'|'software'|'scripture'|'other'}>()

const badge_copied = ref(false)
const link_copied = ref(false)
const badge_failed = ref(false)
const link_failed = ref(false)

const base = 'https://freely.giving'

const pd_code = computed(() => {
    return category === 'software' ? 'pde' : 'pd'
})

const license_url = computed(() => {
    return pd_code.value === 'pd' ? base + '/free' : base
})

const badge_url = computed(() => {
    // The URL for the chosen badge, excluding the file extension
    const flat = category === 'books' ? '_flat' : ''
    return `/badges/fg_standard_${pd_code.value}${flat}.png`
})


const badge_width = computed(() => {
    if (category === 'books'){
        return '2.5in/6.35cm'
    }
    return '360px'
})


const copy_badge = async () => {
    try {
        const blob = await (await fetch(badge_url.value)).blob()
        await self.navigator.clipboard.write([new ClipboardItem({[blob.type]: blob})])
        badge_copied.value = true
        setTimeout(() => {
            badge_copied.value = false
        }, 1000 * 2)
    } catch {
        badge_failed.value = true
    }
}

const copy_link = async () => {
    try {
        await self.navigator.clipboard.writeText(license_url.value)
        link_copied.value = true
        setTimeout(() => {
            link_copied.value = false
        }, 1000 * 2)
    } catch {
        link_failed.value = true
    }
}

</script>


<style lang='sass' scoped>

.links
    display: flex
    flex-wrap: wrap
    gap: 12px
    margin: 12px 0
    align-items: center
    justify-content: center

    .url
        background-color: #0002
        padding: 12px 24px
        border-radius: 12px

    a.btn, button.btn  // Verbose for easier override
        // Hardcoded btn-secondary styles to keep isolated
        display: inline-block
        text-align: center
        border: none
        padding: 12px
        background: #fff
        border-radius: 999px
        color: #1a1a1a
        text-decoration: none
        font-weight: 600
        font-size: 1rem
        line-height: 1
        color: black
        box-shadow: 0 4px 15px rgba(232, 232, 208, 0.3)
        cursor: pointer
        // Custom styles for this component
        transition: background-color 0.5s ease, color 0.5s ease, box-shadow 0.3s ease
        &:hover
            text-decoration: none
        &:hover:not(.copied):not(.failed)
            background: #eaeac8
            box-shadow: 0 6px 20px rgba(216, 216, 184, 0.4)
        &.copied
            background-color: #90EE90
            color: #1a1a1a
            font-weight: bold
        &.failed
            background-color: #FF6B6B
            color: white
            font-weight: bold

.badge
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 24px
    margin-bottom: 24px

    img
        max-width: 360px
        width: 100%
        border-radius: 18px  // Badge already has this radius, but helps hide white bg on flat

    .width
        margin-top: 2px
        margin-bottom: 4px
        opacity: 0.6

.also
    text-align: center
    font-weight: bold
    font-size: 24px
    margin: 24px 0

.link-instr
    text-align: center
    font-weight: bold

.page-link
    display: flex
    gap: 24px
    align-items: center

</style>
