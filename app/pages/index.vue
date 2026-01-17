
<template lang="pug">

.quiz-container(@click="menu_open = false")
    .top-bar
        .left
            .menu(@click.stop)
                button.menu-btn(@click="menu_open = !menu_open")
                    svg(viewBox="0 -960 960 960")
                        path(d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z")
                .menu-dropdown(v-if="menu_open")
                    NuxtLink.menu-item(to="/why" @click="menu_open = false" target="_blank") Why this matters
                    NuxtLink.menu-item(to="/questions" @click="menu_open = false" target="_blank") Questions and objections
                    NuxtLink.menu-item(to="/act" @click="menu_open = false" target="_blank") Join the movement
                    NuxtLink.menu-item(to="/about" @click="menu_open = false" target="_blank") About
        .right(v-if="current_step > 0") {{ current_step }} / 10

    transition(:name="`slide-${transition_direction}`" mode="out-in")
        section.section(v-if="current_step === 0" :key="0")
            .content.hero
                h1 You probably already agree…
                img.church(src='../assets/tract_church.jpg')
                p.hero-subtitle Ministry should be free.
                p.hero-description Answer a few questions to find out.
                div.disclaimer This is a simple quiz with no data collection. Promise!
            .controls
                | &nbsp;
                button.btn.cont(@click="next_step") Start

        section.section(v-else-if="current_step === 1" :key="1")
            .content
                h2 How should church services be funded?
                .options
                    button.option(@click="funding_churches = 'no'" :class="funding_churches === 'no' ? 'selected' : ''") Churches should not be funded
                    button.option(@click="funding_churches = 'charge'" :class="funding_churches === 'charge' ? 'selected' : ''") Churches can charge for attending services
                    button.option(@click="funding_churches = 'donate'" :class="funding_churches === 'donate' ? 'selected' : ''") Churches should not charge for services, but can receive donations
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step" :disabled="!funding_churches") Continue

        section.section(v-else-if="current_step === 1.1 || current_step === 2.1" key="no_funding")
            .content
                h2 Scripture is clear on the appropriateness of funding ministry
                .text
                    p Paul received financial support from churches (Phil 4:18) and instructed believers to financially support elders/pastors (1 Tim 5:17-18).
                    p Go back if you'd like to change your answer, or otherwise see this article on #[a(href='https://sellingjesus.org/articles/paying-pastors' target='_blank') why pastors should be paid].
            .controls
                button.btn.back(@click="go_back") Back

        section.section(v-else-if="current_step === 1.2 || current_step === 2.2" key="sell_gospel")
            .content
                h2 Charging for access to the gospel is a sin
                .text
                    p Simon the sorcerer thought the power of the Holy Spirit could be bought and sold, and was rebuked for it (Acts 8:9-24). Please reconsider your answer.
            .controls
                button.btn.back(@click="go_back") Back

        section.section(v-else-if="current_step === 2" :key="2")
            .content
                h2 How should missionaries be funded?
                .options
                    button.option(@click="funding_missionaries = 'no'" :class="funding_missionaries === 'no' ? 'selected' : ''") Missionaries should not be paid
                    button.option(@click="funding_missionaries = 'charge'" :class="funding_missionaries === 'charge' ? 'selected' : ''") Missionaries can charge for the gospel
                    button.option(@click="funding_missionaries = 'donate'" :class="funding_missionaries === 'donate' ? 'selected' : ''") Missionaries should not charge for the gospel, but can receive donations
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step" :disabled="!funding_missionaries") Continue

        section.section.three(v-else-if="current_step === 3" :key="3")
            .content
                p There's a common theme for those two examples.
                .theme-boxes
                    strong Ministry should be financially supported.
                    strong But the ministry itself should not be sold, it should be free.
                    img(src='../assets/tract_plant.jpg')
                    img(src='../assets/tract_gift.jpg')
                p The funding should come through voluntary donations, rather than commercializing the ministry.
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step") Continue

        section.section(v-else-if="current_step === 4" :key="4")
            .content
                p Let's now consider some other examples.
                h2 Which of the following would be ok to charge money for?
                .column-labels
                    span.label-left
                        | Can't charge
                        br
                        span.clarify (must be free)
                    span.label-right
                        | Can charge
                        br
                        span.clarify (and/or sell)
                .single-column-layout
                    transition-group(name="item-move")
                        .single-column-item(
                            v-for="item in all_items"
                            :key="item"
                            :class="get_item_position(item)"
                            @click="handle_item_click(item, $event)"
                        )
                            button.arrow.left(v-if="get_item_value(item) === 'maybe'" @click.stop="move_item_left(item)") ←
                            span {{ format_item_label(item) }}
                            button.arrow.right(v-if="get_item_value(item) === 'maybe'" @click.stop="move_item_right(item)") →
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step") Continue

        section.section(v-else-if="current_step === 4.1" :key="4.1")
            .content
                h2 Great! You agree those forms of ministry should be free
                .text
                    p This isn't what many people believe though. Most churches pay licensing fees to sing worship songs, and many Christian leaders sell books about God. The next steps will evaluate the appropriateness of this.
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step") Continue

        section.section(v-else-if="current_step === 5" :key="5")
            .content
                p You've chosen some forms of ministry as being ok to charge money for.
                h2 Which verses do you believe justify this?
                p.disclaimer (can select multiple)
                .options
                    button.option(@click="toggle_item(justifying_verses, 'luke_10_7')" :class="justifying_verses.includes('luke_10_7') ? 'selected' : ''") “The worker is worthy of his wages” (Luke 10:7)
                    button.option(@click="toggle_item(justifying_verses, '1_tim_5_18')" :class="justifying_verses.includes('1_tim_5_18') ? 'selected' : ''") “Do not muzzle an ox while it is treading out the grain” (1 Tim 5:18)
                    button.option(@click="toggle_item(justifying_verses, '1_cor_9_14')" :class="justifying_verses.includes('1_cor_9_14') ? 'selected' : ''") “The Lord has prescribed that those who preach the gospel should receive their living from the gospel” (1 Cor 9:14)
                    button.option(@click="toggle_item(justifying_verses, 'other')" :class="justifying_verses.includes('other') ? 'selected' : ''") Other
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step") Continue

        section.section.six(v-else-if="current_step === 6" :key="6")
            .content
                .theme-boxes
                    p Many passages affirm that it is appropriate to receive wages for ministry.
                    p But do they suggest funding can be obtained by charging for the ministry?
                    img(src='../assets/tract_plant.jpg')
                    img(src='../assets/tract_gift.jpg')
                    strong Ministry should be supported
                    strong Sold or free
                    svg.tick(viewBox="0 -960 960 960")
                        path(d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z")
                    svg.question(viewBox="0 -960 960 960")
                        path(d="M424-320q0-81 14.5-116.5T500-514q41-36 62.5-62.5T584-637q0-41-27.5-68T480-732q-51 0-77.5 31T365-638l-103-44q21-64 77-111t141-47q105 0 161.5 58.5T698-641q0 50-21.5 85.5T609-475q-49 47-59.5 71.5T539-320H424Zm56 240q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Z")
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step") Continue

        section.section.seven(v-else-if="current_step === 7" :key="7")
            .content
                p There's a few ways we can test this…

                h3 Are passages being applied consistently?
                p Is it clear from Scripture why teaching can be sold, but not Sunday sermons?
                .options.horizontal
                    button.option(@click="consistency = 'yes'" :class="consistency === 'yes' ? 'selected' : ''") Yes
                    button.option(@click="consistency = 'maybe'" :class="consistency === 'maybe' ? 'selected' : ''") Maybe
                    button.option(@click="consistency = 'no'" :class="consistency === 'no' ? 'selected' : ''") No

                h3 Would the early church have done this?
                p Would Paul have been ok if Timothy was charging for his teaching?
                .options.horizontal
                    button.option(@click="early_church = 'yes'" :class="early_church === 'yes' ? 'selected' : ''") Yes
                    button.option(@click="early_church = 'maybe'" :class="early_church === 'maybe' ? 'selected' : ''") Maybe
                    button.option(@click="early_church = 'no'" :class="early_church === 'no' ? 'selected' : ''") No

                h3 Is charging for teaching compatible with the following passages?
                p Micah condemned Israel because “her priests teach for a price” (Micah 3:11)
                p Jesus declared that the disciples' preaching must be freely given (Matt 10:8)
                p Paul condemned those who peddle (sell) “the word of God” (2 Cor 2:17)
                .options.horizontal
                    button.option(@click="scripture_compatible = 'yes'" :class="scripture_compatible === 'yes' ? 'selected' : ''") Yes
                    button.option(@click="scripture_compatible = 'maybe'" :class="scripture_compatible === 'maybe' ? 'selected' : ''") Maybe
                    button.option(@click="scripture_compatible = 'no'" :class="scripture_compatible === 'no' ? 'selected' : ''") No
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step" :disabled="!(consistency && early_church && scripture_compatible)") Continue

        section.section(v-else-if="current_step === 8" :key="8")
            .content
                p So how do all these things fit together without contradiction?
                h2 Both Jesus and Paul taught that “ministry should be supported, not sold.”
                .table-section
                    h3 Jesus
                    h3 Paul
                    .table-item
                        strong Ministry should be free.
                        p Jesus told his disciples to “freely give” their ministry.
                        p.verse-ref (Matt 10:8)
                    .table-item
                        strong Ministry should be free.
                        p Paul always ministered for free and told believers to follow his example.
                        p.verse-ref (1 Cor 9:18, 11:1)
                    .table-item
                        strong It should be supported,
                        p He taught them that “the worker is worthy of his wages”...
                        p.verse-ref (Luke 10:7)
                    .table-item
                        strong It should be supported,
                        p He taught that ministers should “receive their living from the gospel”...
                        p.verse-ref (1 Cor 9:14)
                    .table-item
                        strong but through donations, not sales.
                        p He permitted them to receive hospitality, but forbade them from receiving it from everyone they served.
                        p.verse-ref (Luke 10:7)
                    .table-item
                        strong but through donations, not sales.
                        p He condemned those who charged for their teaching, and only accepted donations that didn't burden those he served.
                        p.verse-ref (2 Cor 2:17, 11:8-9)
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step") Continue

        section.section(v-else-if="current_step === 9" :key="9")
            .content
                p.final-intro So you probably still agree that some forms of ministry
                    br
                    strong
                        em “should be supported, not sold.”
                h2.final-question But to what degree?
                p.final-body We should not just do what is right in our own eyes, but test everything against Scripture. There are no passages that suggest it is only the basics of the faith that can't be sold. Rather, Scripture points to it being wrong to charge for
                    |
                    |
                    em any form of ministry.
                p.final-body The Lord Jesus was greatly upset when the temple was turned into a marketplace (John 2:16). We should, therefore, carefully consider whether we've done the same for ministry today.
            .controls
                button.btn.back(@click="go_back") Back
                button.btn.cont(@click="next_step") Learn more

        section.section(v-else-if="current_step === 10" :key="10")
            .content
                h2 Where to from here?
                .cards
                    a.card(href='https://sellingjesus.org' target='_blank')
                        img(src='../assets/tract_church.jpg')
                        .card-body
                            h3 Why this matters
                            p Watch a short video on how the commercialization of ministry impacts all believers, and especially the most needy.
                    a.card(href='https://sellingjesus.org' target='_blank')
                        img(src='../assets/tract_plant.jpg')
                        .card-body
                            h3 Questions and objections
                            p Covering our interpretation of Scripture and the practical implications of this teaching.
                    a.card(href='https://sellingjesus.org' target='_blank')
                        img(src='../assets/tract_gift.jpg')
                        .card-body
                            h3 Join the movement
                            p Learn how to get involved and how to help
            .controls
                button.btn.back(@click="go_back") Back

</template>

<script setup lang="ts">
import { ref } from 'vue'

const current_step = ref(0)
const transition_direction = ref('forward')
const menu_open = ref(false)

// Single answer questions
const funding_churches = ref('')
const funding_missionaries = ref('')
const consistency = ref('')
const early_church = ref('')
const scripture_compatible = ref('')
const your_position = ref('')

// Multiple answer questions
const justifying_verses = ref<string[]>([])

// Three-column items for step 4
const items_no = ref<string[]>([])
const items_maybe = ref<string[]>(['evangelism', 'baptism', 'communion', 'ebooks', 'prayer', 'worship_songs', 'conference_talks', 'bible_study', 'youth_group'])
const items_yes = ref<string[]>([])

const all_items = ['evangelism', 'baptism', 'communion', 'ebooks', 'prayer', 'worship_songs', 'conference_talks', 'bible_study', 'youth_group']

function next_step() {
    transition_direction.value = 'forward'

    // Bad answers for 1
    if (current_step.value === 1 && funding_churches.value === 'no') {
        current_step.value = 1.1
    } else if (current_step.value === 1 && funding_churches.value === 'charge') {
        current_step.value = 1.2

    // Bad answers for 2
    } else if (current_step.value === 2 && funding_missionaries.value === 'no') {
        current_step.value = 2.1
    } else if (current_step.value === 2 && funding_missionaries.value === 'charge') {
        current_step.value = 2.2

    // If don't think any ministry can be sold
    } else if (current_step.value === 4 && items_no.value.length === all_items.length) {
        current_step.value = 4.1

    // Skip 5 if went to 4.1
    } else if (current_step.value === 4.1) {
        current_step.value = 6

    // General increase
    } else if (current_step.value < 10) {
        current_step.value++
    }
}

function go_back() {
    if (current_step.value > 0) {
        transition_direction.value = 'backward'
        // If on a decimal step (e.g., 1.1, 2.3), go back to the base step (e.g., 1, 2)
        if (current_step.value % 1 !== 0) {
            current_step.value = Math.floor(current_step.value)
        } else {
            current_step.value--
        }
    }
}

function get_item_value(item: string): 'no' | 'maybe' | 'yes' {
    if (items_no.value.includes(item)) return 'no'
    if (items_yes.value.includes(item)) return 'yes'
    return 'maybe'
}

function get_item_position(item: string): string {
    const value = get_item_value(item)
    return `position-${value}`
}

function move_item_left(item: string) {
    const current = get_item_value(item)
    if (current === 'yes') {
        items_yes.value = items_yes.value.filter(i => i !== item)
        items_no.value.push(item)
    } else if (current === 'maybe') {
        items_maybe.value = items_maybe.value.filter(i => i !== item)
        items_no.value.push(item)
    }
}

function move_item_right(item: string) {
    const current = get_item_value(item)
    if (current === 'no') {
        items_no.value = items_no.value.filter(i => i !== item)
        items_yes.value.push(item)
    } else if (current === 'maybe') {
        items_maybe.value = items_maybe.value.filter(i => i !== item)
        items_yes.value.push(item)
    }
}

function handle_item_click(item: string, event: MouseEvent) {
    const current = get_item_value(item)

    if (current === 'no') {
        // Clicking on a "no" item moves it to "yes"
        move_item_right(item)
    } else if (current === 'yes') {
        // Clicking on a "yes" item moves it to "no"
        move_item_left(item)
    } else if (current === 'maybe') {
        // For neutral items, check which half was clicked
        const target = event.currentTarget as HTMLElement
        const rect = target.getBoundingClientRect()
        const clickX = event.clientX - rect.left
        const halfWidth = rect.width / 2

        if (clickX < halfWidth) {
            move_item_left(item)
        } else {
            move_item_right(item)
        }
    }
}

function format_item_label(item: string): string {
    const labels: Record<string, string> = {
        'evangelism': 'Evangelism',
        'baptism': 'Baptism',
        'communion': 'Communion',
        'ebooks': 'Discipleship ebooks',
        'prayer': 'Prayer',
        'worship_songs': 'Worship songs',
        'conference_talks': 'Conference talks',
        'bible_study': 'Bible study',
        'youth_group': 'Youth group'
    }
    return labels[item] || item
}

function toggle_item(arr: string[], item: string) {
    const idx = arr.indexOf(item)
    if (idx === -1) {
        arr.push(item)
    } else {
        arr.splice(idx, 1)
    }
}

</script>

<style scoped lang="sass">


h2
    font-size: 20px

.content .text
    font-size: 1rem
    line-height: 1.8
    margin-bottom: 1rem
    text-align: left

.quiz-container
    height: 100vh
    height: 100dvh
    display: flex
    flex-direction: column
    align-items: center
    color: #111
    padding: 12px

.top-bar
    display: flex
    width: 100%
    max-width: 640px
    justify-content: space-between
    align-items: center
    padding: 4px 8px
    border-radius: 12px
    margin-bottom: 12px
    background: rgba(255, 255, 255, 0.5)
    backdrop-filter: blur(10px)
    border-bottom: 1px solid rgba(255, 255, 255, 0.3)
    font-size: 12px
    color: #333

    .right
        padding-right: 8px
        font-weight: bold
        color: #0006

.menu
    position: relative

.menu-btn
    display: flex
    align-items: center
    gap: 6px
    padding: 8px
    background: transparent
    border: none
    cursor: pointer
    font-size: 14px
    color: #0006
    transition: all 0.2s ease
    border-radius: 6px

    &:hover
        background: rgba(0, 0, 0, 0.05)
        color: #333

    .arrow
        font-size: 10px
        opacity: 0.7

    svg
        width: 24px
        height: 24px

        path
            fill: #0006

.menu-dropdown
    position: absolute
    top: 100%
    left: 0
    margin-top: 4px
    background: white
    border: 1px solid #ddd
    border-radius: 8px
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)
    min-width: 160px
    z-index: 100

.menu-item
    display: block
    padding: 14px 16px
    color: #333
    text-decoration: none
    font-size: 15px
    transition: background 0.2s ease
    min-height: 44px

    &:hover
        background: #f5f5f5

    &:first-child
        border-radius: 8px 8px 0 0

    &:last-child
        border-radius: 0 0 8px 8px

transition
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    overflow-y: auto
    width: 100%

.section
    display: flex
    flex-direction: column
    justify-content: space-between
    padding: 16px
    width: 100%
    max-width: 640px
    margin-top: 24px
    background: white
    border-radius: 16px
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)

    @media (max-width: 768px)
        margin-top: 0
        flex-grow: 1
        height: 0

.content
    text-align: center
    overflow: auto
    padding-bottom: 24px

    &.hero
        h1
            font-size: 26px
            font-weight: bold
            margin: 16px 0
            line-height: 1.2

        .hero-subtitle
            font-size: 40px
            line-height: 1.2
            margin-top: 0
            margin-bottom: 24px
            font-weight: bold
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
            -webkit-background-clip: text
            -webkit-text-fill-color: transparent
            background-clip: text

        .hero-description
            font-size: 18px
            color: #555

.options
    display: grid
    gap: 12px
    margin-top: 16px

    &.horizontal
        grid-template-columns: repeat(3, 1fr)

.option
    padding: 14px 19px
    border-radius: 999px
    border: 1px solid #bbb
    background: white
    color: #111
    transition: all 0.2s ease

    &:hover
        background: #fef1ff

    &.selected
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
        color: white
        border-color: transparent

.controls
    display: flex
    justify-content: space-between
    padding-top: 12px
    border-top: 1px solid #0003

.disclaimer
    font-size: 14px
    opacity: 0.5

.btn
    padding: 11px 22px
    border-radius: 999px
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
    color: white
    border: none
    transition: all 0.2s ease

    &:hover:not(:disabled)
        box-shadow: 0 4px 12px rgba(240, 147, 251, 0.4)

    &.back
        background: #888

    &.cont:disabled
        opacity: 0.5

.note
    opacity: 0.9
    font-size: 14px
    color: #444

.slide-forward-enter-active,
.slide-backward-enter-active
    transition: all 0.4s ease

.slide-forward-leave-active,
.slide-backward-leave-active
    transition: all 0.1s ease

.slide-forward-enter-from,
.slide-backward-enter-from
    opacity: 0

.slide-forward-leave-to,
.slide-backward-leave-to
    opacity: 0

.slide-forward-enter-from
    transform: translateX(100%)

.slide-forward-leave-to
    transform: translateX(-100%)

.slide-backward-enter-from
    transform: translateX(-100%)

.slide-backward-leave-to
    transform: translateX(100%)

.theme-boxes
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 24px
    margin-top: 24px

    @media (max-width: 768px)
        grid-template-columns: 1fr

    strong
        display: block
        margin-bottom: 16px
        font-size: 18px

    img
        width: 100%
        max-width: 50vw
        margin: 0 auto
        border-radius: 12px

    svg
        width: 48px
        height: 48px

        &.tick path
            fill: green
        &.question path
            fill: orange

.three .theme-boxes
    @media (max-width: 768px)
        strong:nth-of-type(1)
            order: 1
        img:nth-of-type(1)
            order: 2
        strong:nth-of-type(2)
            order: 3
        img:nth-of-type(2)
            order: 4

.six .theme-boxes
    @media (max-width: 768px)
        p:nth-of-type(1)
            order: 1
        img:nth-of-type(1)
            order: 2
        strong:nth-of-type(1)
            order: 3
        svg:nth-of-type(1)
            order: 4
        p:nth-of-type(2)
            order: 5
        img:nth-of-type(2)
            order: 6
        strong:nth-of-type(2)
            order: 7
        svg:nth-of-type(2)
            order: 8

.column-labels
    display: flex
    justify-content: space-between
    padding: 0 16px
    margin-top: 16px
    font-size: 18px
    font-weight: bold
    color: #666

    .label-left
        text-align: left
        color: #ef5350

    .label-right
        text-align: right
        color: #66bb6a

    .clarify
        margin-top: 8px
        color: black
        opacity: 0.5
        font-weight: normal
        font-size: 14px

.single-column-layout
    display: flex
    flex-direction: column
    gap: 12px
    margin-top: 24px
    padding: 0 16px
    overflow: hidden

.item-move-move
    transition: all 0.5s ease

.item-move-enter-active,
.item-move-leave-active
    transition: all 0.5s ease

.item-move-enter-from
    opacity: 0
    transform: translateX(30px)

.item-move-leave-to
    opacity: 0
    transform: translateX(-30px)

.single-column-item
    display: flex
    align-items: center
    gap: 0
    padding: 12px
    background: white
    border-radius: 8px
    border: 1px solid #ddd
    width: 66.666%
    transition: all 0.3s ease
    margin: 0 auto
    position: relative
    cursor: pointer

    &:hover
        background: #fef1ff

    &.position-no
        margin-left: 0
        margin-right: auto
        background: #ffebee
        border-color: #ef5350

    &.position-maybe
        margin-left: auto
        margin-right: auto

    &.position-yes
        margin-left: auto
        margin-right: 0
        background: #e8f5e9
        border-color: #66bb6a

    span
        flex: 1
        text-align: center
        font-size: 14px
        padding: 0 8px

.arrow
    padding: 12px 8px
    background: transparent
    border: none
    cursor: pointer
    font-size: 19px
    transition: all 0.2s ease
    flex-shrink: 0
    color: #666
    margin: -12px 0

    &:hover:not(:disabled)
        color: #333
        transform: scale(1.2)

    &:disabled
        opacity: 0
        cursor: default
        pointer-events: none

    &.left
        margin-left: -12px
        padding-left: 12px

    &.right
        margin-right: -12px
        padding-right: 12px

.table-section
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 16px
    margin-top: 24px
    text-align: left

    @media (max-width: 768px)
        grid-template-columns: 1fr

        h3:nth-of-type(1)
            order: 1

        .table-item:nth-of-type(1)
            order: 2

        .table-item:nth-of-type(3)
            order: 3

        .table-item:nth-of-type(5)
            order: 4

        h3:nth-of-type(2)
            order: 5

        .table-item:nth-of-type(2)
            order: 6

        .table-item:nth-of-type(4)
            order: 7

        .table-item:nth-of-type(6)
            order: 8

    h3
        padding: 1rem
        margin: 0
        text-align: center
        font-size: 24px
        font-weight: bold
        border-radius: 8px

        &:nth-of-type(1)
            background: #bbdefb

        &:nth-of-type(2)
            background: #c8e6c9

.table-item
    padding: 1rem
    border: 1px solid #ddd
    border-radius: 8px
    background: #fff
    display: flex
    flex-direction: column

    &:nth-child(odd)
        background: #e3f2fd

    &:nth-child(even)
        background: #e8f5e9

    strong
        display: block
        margin-bottom: 0.5rem

    p
        margin: 0
        font-size: 0.95rem

    .verse-ref
        text-align: right
        font-size: 0.85rem
        opacity: 0.7
        margin-top: auto
        padding-top: 0.5rem

.final-intro
    font-size: 1.1rem
    margin-bottom: 1.5rem
    line-height: 1.6

.final-question
    font-size: 2rem
    margin: 1.5rem 0
    color: #764ba2
    font-weight: bold

.final-body
    font-size: 1rem
    line-height: 1.8
    margin-bottom: 1rem
    text-align: left

    em
        font-style: italic
        font-weight: bold
        color: #f5576c

img
    border-radius: 24px
    width: 100%

    &.church
        max-width: 250px
        margin: 0 auto

.cards
    display: flex
    flex-direction: column
    gap: 12px
    margin: 16px 0

.card
    display: flex
    align-items: stretch
    overflow: hidden
    border-radius: 8px
    background: #fef1ff
    border: 1px solid #ddd
    text-decoration: none
    color: inherit
    text-align: left

    &:hover
        box-shadow: 0 6px 18px rgba(0,0,0,0.08)

    img
        width: 96px
        height: auto
        object-fit: cover
        flex-shrink: 0
        border-radius: 0

.card-body
    display: flex
    flex-direction: column
    padding: 12px

    h3
        margin: 0 0 6px 0
        font-size: 16px

    p
        margin: 0
        color: #555

// Section-specific

.seven h3
    margin-top: 36px

</style>
