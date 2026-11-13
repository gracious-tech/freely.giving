
<template lang="pug">

nav.site-nav(ref="nav_el")
    GO.brand(to="/" aria-label="Home")
        img.brand-icon(src="/icon.png" alt="")
        span.brand-text freely.giving
    .entries
        template(v-for="entry of entries" :key="entry.label")
            //- Entries with sub-pages open a dropdown menu
            .group(v-if="entry.items")
                button.nav-link.group-btn(
                    type="button"
                    :class="{active: is_group_active(entry.items)}"
                    :aria-expanded="open_group === entry.label"
                    @click="toggle_group(entry.label)"
                )
                    | {{ entry.label }}
                    Icon.chevron(name="material-symbols:keyboard-arrow-down")
                .panel(v-if="open_group === entry.label")
                    GO.panel-link(
                        v-for="item of entry.items"
                        :key="item.to"
                        :to="item.to"
                        :class="{active: route.path === item.to}"
                        :target="item.new_tab ? '_blank' : undefined"
                    ) {{ item.label }}
            //- Entries without sub-pages are plain links
            GO.nav-link(
                v-else-if="entry.to"
                :to="entry.to"
                :class="{active: is_entry_active(entry)}"
            ) {{ entry.label }}

</template>

<script setup lang="ts">

// A single page link
interface NavItem {
    to: string
    label: string
    // Open in a new tab, for standalone experiences like the quiz
    new_tab?: boolean
}

// A top-level entry that is either a direct link or a dropdown of links
interface NavEntry {
    label: string
    to?: string
    // Paths, including their sub-pages, that also count as this entry being active
    match?: string[]
    items?: NavItem[]
}

// Structure of the navigation bar
const entries: NavEntry[] = [
    {label: 'Browse', to: '/browse'},
    {label: 'Publish', to: '/publish'},
    {label: 'Community', to: '/people', match: ['/people', '/groups']},
    {label: 'Learn', items: [
        {to: '/why', label: 'Why freely give?'},
        {to: '/quiz', label: 'Take the quiz', new_tab: true},
        {to: '/questions', label: 'Questions & Answers'},
        {to: '/funding', label: 'How to fund'},
        {to: '/about', label: 'About this site'},
    ]},
]

const route = useRoute()
const nav_el = ref<HTMLElement | null>(null)
const open_group = ref<string | null>(null)

// Whether the current page is one of the given items or a sub-page of one
function is_group_active(items: NavItem[]): boolean {
    return items.some(item => route.path === item.to || route.path.startsWith(`${item.to}/`))
}

// Whether the current page belongs to the given direct-link entry
function is_entry_active(entry: NavEntry): boolean {
    if (entry.match) {
        return entry.match.some(path => route.path === path || route.path.startsWith(`${path}/`))
    }
    return route.path === entry.to
}

// Open the given dropdown, or close it if already open
function toggle_group(label: string): void {
    open_group.value = open_group.value === label ? null : label
}

// Close any open dropdown when clicking elsewhere on the page
function on_document_click(event: MouseEvent): void {
    if (event.target instanceof Node && !nav_el.value?.contains(event.target)) {
        open_group.value = null
    }
}

// Close any open dropdown when escape is pressed
function on_keydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
        open_group.value = null
    }
}

// Close any open dropdown after navigating
watch(() => route.path, () => {
    open_group.value = null
})

// Listen for page-wide events only while mounted
onMounted(() => {
    document.addEventListener('click', on_document_click)
    document.addEventListener('keydown', on_keydown)
})
onUnmounted(() => {
    document.removeEventListener('click', on_document_click)
    document.removeEventListener('keydown', on_keydown)
})

</script>

<style scoped lang="sass">

.site-nav
    // Stay in view while scrolling so navigation is always within reach
    position: sticky
    top: 0
    z-index: 100
    display: flex
    align-items: center
    justify-content: space-between
    gap: 24px
    padding: 8px 20px
    background: rgba(40, 20, 60, 0.6)
    backdrop-filter: blur(12px)
    border-bottom: 1px solid rgba(255, 255, 255, 0.15)
    // Prevent accidental text selection when tapping or clicking entries
    user-select: none

    @media (max-width: 768px)
        gap: 4px
        padding: 4px 8px

.brand
    display: flex
    align-items: center
    gap: 10px
    color: white
    text-decoration: none
    font-size: 1.2rem
    font-weight: 700
    padding: 8px 0

    @media (max-width: 768px)
        padding: 6px

.brand-icon
    width: 32px
    height: 32px

    @media (max-width: 768px)
        width: 28px
        height: 28px

.brand-text
    @media (max-width: 768px)
        display: none

.entries
    display: flex
    gap: 4px

    // Scroll sideways rather than overflow if a phone is too narrow for all entries
    @media (max-width: 768px)
        overflow-x: auto

.group
    // Dropdowns align to their button on desktop, but span the whole bar on phones
    @media (min-width: 769px)
        position: relative

.nav-link
    white-space: nowrap

    @media (max-width: 768px)
        padding: 6px 8px
        font-size: 0.85rem

    // Highlight the section currently being viewed
    &.active
        color: white
        background: rgba(255, 255, 255, 0.15)

.group-btn
    display: flex
    align-items: center
    gap: 2px
    background: none
    border: none
    font-family: inherit

    &[aria-expanded="true"]
        color: white
        background: rgba(255, 255, 255, 0.1)

        .chevron
            transform: rotate(180deg)

.chevron
    font-size: 1.2em
    margin-right: -4px
    transition: transform 0.2s ease

.panel
    position: absolute
    top: calc(100% + 8px)
    right: 0
    display: flex
    flex-direction: column
    gap: 2px
    min-width: 220px
    padding: 8px
    background: #3a2350
    border: 1px solid rgba(255, 255, 255, 0.15)
    border-radius: 12px
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3)

    @media (max-width: 768px)
        top: 100%
        left: 8px
        right: 8px

.panel-link
    color: rgba(255, 255, 255, 0.85)
    text-decoration: none
    font-size: 1rem
    font-weight: 500
    padding: 10px 14px
    border-radius: 8px

    &:hover, &.active
        color: white
        background: rgba(255, 255, 255, 0.12)

</style>
