
// A single collection of resources that can be linked to
export interface ResourceLink {
    url: string
    label: string
    description: string
    badge?: string
}

// A category of resources, such as books or music
export interface ResourceCategory {
    id: string
    title: string
    icon: string
    gradient_class: string
    links: ResourceLink[]
}

// Badge for collections that include some resources that aren't freely given
const restricted = 'some restricted'

// All categories of freely given resources, in display order
export const resource_categories: ResourceCategory[] = [
    {
        id: 'books',
        title: 'Books',
        icon: 'material-symbols:auto-stories',
        gradient_class: 'gradient-books',
        links: [
            {
                url: 'https://books.freely.giving/',
                label: 'Freely Given Books',
                description: 'Books with free downloads and on-demand printing',
            },
            {
                url: 'https://commonwealpress.org/',
                label: 'Common Weal Press',
                description: 'Reformed and Puritan classics edited for modern readers',
            },
        ],
    },
    {
        id: 'music',
        title: 'Music',
        icon: 'material-symbols:music-note',
        gradient_class: 'gradient-music',
        links: [
            {
                url: 'http://openhymnal.org/',
                label: 'Open Hymnal',
                description: 'A large collection of historic hymns',
            },
            {
                url: '/music',
                label: 'Freely Given Music',
                description: 'A small list of modern Christian music',
            },
        ],
    },
    {
        id: 'videos',
        title: 'Videos',
        icon: 'material-symbols:play-circle',
        gradient_class: 'gradient-videos',
        links: [
            {
                url: 'https://lets.church/',
                label: "Let's Church",
                description: 'A platform that hosts videos for free with no ads',
                badge: restricted,
            },
        ],
    },
    {
        id: 'images',
        title: 'Images',
        icon: 'material-symbols:image',
        gradient_class: 'gradient-images',
        links: [
            {
                url: 'http://freebibleimages.org/',
                label: 'Free Bible Images',
                description: 'Bible-related images',
                badge: restricted,
            },
            {
                url: 'https://openverse.org/',
                label: 'Openverse',
                description: 'General images for complementing Christian resources',
                badge: restricted,
            },
        ],
    },
    {
        id: 'software',
        title: 'Apps',
        icon: 'material-symbols:apps',
        gradient_class: 'gradient-software',
        links: [
            {
                url: 'https://faith.tools/open-source',
                label: 'faith.tools',
                description: 'Various Christian apps, with an open source category',
                badge: restricted,
            },
            {
                url: 'https://github.com/meichthys/christian_foss',
                label: 'Christian FOSS',
                description: 'A list of open source software, including low level modules',
            },
        ],
    },
    {
        id: 'scripture',
        title: 'Bibles',
        icon: 'fa7-solid:bible',
        gradient_class: 'gradient-scripture',
        links: [
            {
                url: 'https://ebible.org/Scriptures/',
                label: 'eBible.org',
                description: 'A repository of Bible translations in many different formats',
                badge: restricted,
            },
            {
                url: 'https://dbs.org/bibles',
                label: 'Digital Bible Society',
                description: 'A repository of Bible translations in several different formats',
                badge: restricted,
            },
            {
                url: 'https://paper.bible',
                label: 'Paper Bible',
                description: 'Generate PDFs of Scripture for printing at home or professionally',
            },
            {
                url: 'https://fetch.bible',
                label: 'fetch(bible)',
                description: 'A software platform for integrating Scripture into websites and apps',
            },
        ],
    },
    {
        id: 'other',
        title: 'Other',
        icon: 'material-symbols:auto-awesome-motion',
        gradient_class: 'gradient-other',
        links: [
            {
                url: '/other',
                label: 'Other Resources',
                description: 'Trainings, websites, and more',
            },
        ],
    },
]
