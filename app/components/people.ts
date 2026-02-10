
import {ref} from 'vue'


interface Person {
    name:string
    title:string
    education:string
    site:string
    bio:string
    quote:string
}


export const people:Record<string, Person> = {
    alan_bunning: {
        name: "Alan Bunning",
        title: "Founder of the Center for New Testament Restoration",
        education: "D.Litt.",
        site: 'https://greekcntr.org/',
        bio: "Alan is the creator of the first New Testament critical text to use purely scientific textual criticism. He received his D.Litt. degree from the Kensington Theological Academy for his work in Greek New Testament textual criticism. Alan was previously an Assistant Professor in Computer Information Systems at Ivy Tech Community College and a Senior Lecturer in Computer Science at Purdue University. He has also authored several books and is an accomplished musician.",
        quote: "I want everyone to be able to access all of the biblical resources for free that I wish I would have had access to when I first became a Christian.",
    },
    michael_johnson: {
        name: "Michael Johnson",
        title: "Director of eBible.org",
        education: "",
        site: "https://mljohnson.org/",
        bio: "Michael distributes over 1,000 freely shareable Bible translations on eBible.org. He also served as a missionary in Papua New Guinea, and has a certificate in Bible translation from the Graduate Institute of Applied Linguistics.",
        quote: "While starting to distribute the Holy Bible digitally, I ran into copyright restrictions that limited me to very old translations with archaic language. When I asked God what to do about that, the Lord directed me to do my own translation. With lots of help, the result is the copyright-free World English Bible. I started giving away Bible translation 'intellectual property' before it was popular to do so, and others found that made sense, to maximize ministry impact that way.",
    },
    conley_owens: {
        name: "Conley Owens",
        title: "Author of The Dorean Principle",
        education: "MDiv",
        site: 'https://thedoreanprinciple.org/',
        bio: "Conley is a software engineer, a pastor at Silicon Valley Reformed Baptist Church, and a father of ten kids.  He is also the author of The Dorean Principle: A Biblical Response to the Commercialization of Christianity.",
        quote: "I began exploring issues with licensing back in college, and over time I witnessed the substantial friction it created in ministry. I was convicted regarding the harm commercial practices cause the church, but for a long time, I was never sure if the Bible had much to say directly about the matter. It turns out it does!",
    },
    beth_case: {
        name: "Bethany Case",
        title: "Cofounder of Aleph with Beth",
        education: "MA in Linguistics",
        site: 'https://freehebrew.online/',
        bio: "Bethany is a linguist, mother, artist, and Hebrew teacher with Aleph with Beth, which offers free Biblical Hebrew learning resources worldwide.",
        quote: "I've seen firsthand that many Christians around the world have little to no access to biblical language resources and in-depth Bible study tools, so we are creating public domain Hebrew resources for free translation and sharing. Copyrights and legal restrictions on Christian images, films, books, etc. often prevent me from using them to enhance the learning experience of Hebrew.",
    },
    andrew_case: {
        name: "Andrew Case",
        title: "Cofounder of Aleph with Beth",
        education: "MDiv",
        site: 'https://hismagnificence.com/',
        bio: "Andrew is a Bible translation consultant and the cofounder of Aleph with Beth, which provides free videos for learning biblical Hebrew. He is also an author and musician.",
        quote: "I've seen up close the biblical knowledge famine in the developing world. I want my African brothers to have access to the same depth of Bible study that I have, but the status quo of copyright and monetized Christian resources keeps that from happening, and severely hinders my work in Bible translation. So I'm doing my part to encourage a reformation in this area.",
    },
    jon_here: {
        name: "Jon Here",
        title: "Founder of Gracious Tech",
        education: "MDiv",
        site: 'https://gracious.tech',
        bio: "Jon has served as a pastor, a missionary in South-East Asia, and went on to start his own company for creating apps for mission. Every app his company makes is free to use and open source.",
        quote: "The first app I made was for evangelizing using plain Scripture. It was almost done when I realised Bible translations forbid sharing plain Scripture! Copyright has been the number one barrier to my ministry ever since.",
    },
    jack: {
        name: "Jack",
        title: "Missionary in remote Asia",
        education: "",
        site: '',
        bio: "Jack lives and works with a minority people group in a remote location of Asia. Sometimes he helps film parables for them in their language or encourages those that translate their scriptures. Other times he is just with them, talking goats and sheep.",
        quote: "How can we give to God more than we receive from him? If I burnt out or became poor for his sake, it would be worth it, but it still wouldn't come close to what he's given me. The least I can do is also give freely.",
    },
    craig_bradley: {
        name: "Craig Bradley",
        title: "Founder of AO Lab",
        education: "",
        site: "https://linktr.ee/helloaolab",
        bio: "Craig and AO Lab make digital tools and experiences to help Christian communities love and live out the Bible. AO Lab’s tools are designed to be easily understood and modified, and may be used freely and adapted for any purpose. AO Lab only asks you pray and seek God’s will in everything you do.",
        quote: "Our passion is making tools that Christians we have never met can modify for any purpose the Holy Spirit inspires. Only by giving things away without restriction can we ensure we are not hindering the work of God!",
    },
    robert_hunt: {
        name: "Robert Hunt",
        title: "Bible translator",
        education: "",
        site: "https://www.freely-given.org/",
        bio: "Robert served as a Bible translation trainer and facilitator for a Philippine cultural community for some thirty years. Now technically ‘retired’, he's been able to start working full-time on his long-held dream of open-licensed Bible software and datasets.",
        quote: "When I switched to using Linux open-source software (generously offered freely by many people, probably mostly non-Christians), I was never able to figure out why the only encrypted and locked resources on my laptop were Bibles — even the original Hebrew and Greek texts! I founded Freely-Given.org back in 2009 to try to correct that scenario and to dedicate whatever remaining years God gives me to being at least as generous in the Bible world as others are in the secular world.",
    },
    mark_feezell: {
        name: "Mark Feezell",
        title: "Professor of music",
        education: "Ph.D.",
        site: "https://drfeezell.com/",
        bio: "Mark was born in San Antonio and teaches Music Theory at Southern Methodist University in Dallas, Texas. He earned a Ph.D. in Music Composition from the University of North Texas in 2003, and has released his composition dissertation into the public domain, along with many other worship pieces.",
        quote: "When we completely release everything the Lord has given into our hands, we are most like Him in His generosity, and we gift to others that same chance to choose to give as God gives.",
    },
    matt_mangum: {
        name: "Matthew Mangum",
        title: "Author of God Spoke",
        education: "MA in Religion",
        site: "https://equipthesaints.church/",
        bio: "Matthew has a background as a translator for the military, spent some time in the parachurch ministry world, and is now transitioning to a role as a teacher at a classical Christian academy. He is the author of God Spoke: The Story of How We Came to Have the Bible as We Know It Today.",
        quote: "I never really thought much about the commercialization of Christianity until it was pointed out to me, and I suspect that is true of many people. It is now my hope to be able to create freely given Christian education materials that may equip the saints for the work of ministry. Christ has freely given to us; should I not also freely give?",
    },
    ken_powers: {
        name: "Ken Powers",
        title: "Founder of Let's Church",
        education: "",
        site: "https://lets.church/",
        bio: "Ken is a Christian husband, father, and technologist who founded Let's Church, an ad-free alternative to YouTube and a free alternative to Sermon Audio with fully searchable transcripts. Everything Let's Church does is open source.",
        quote: "It’s worth asking why Christians sometimes place stricter limits on Scripture and worship than many do on secular work. Freely giving better reflects trust in God with the outcome.",
    },
    meichthys: {
        name: "MeIchthys",
        title: "Developer of TheChurchApp",
        education: "",
        site: "https://github.com/meichthys/church",
        bio: "MeIchthys is an IT enthusiast, a deacon in his local church, and an advocate for open-source church software. With a full-time day job and being a night-time family man, he finds a few seconds here and there to dedicate to projects with eternal value.",
        quote: "After discovering the world of open source, I was baffled how the global Church was not a leader in this area. Rather than following the first-century example of having \"all things common\", the Church is so often burdened with the buying and selling of ministry resources. With direct admonitions like \"Freely you have received, freely give\", I have decided to make it a life goal to encourage the development and support of free Christian software.",
    },
    courtney_hicks: {
        name: "Courtney Hicks",
        title: "Creator of Freely Given Books",
        education: "",
        site: "https://books.freely.giving",
        bio: "Courtney has a background in systems administration and IT and, over time, has developed a desire to make classic Christian literature more widely available and free from the copyrights and DRM imposed by modern Christian publishers.",
        quote: "I first became interested in making Christian works readily available when I discovered that publishers require permission to use the Bible in ministry and impose DRM restrictions on Christian books. My desire is to keep edifying books free and available so that Christ may build up the church through them.",
    },
    michael_coughlin: {
        name: "Michael Coughlin",
        title: "Writer at Things Above Us",
        education: "",
        site: "https://thingsabove.us/",
        bio: "Michael is a dedicated member of his local church in rural Ohio and seeks to glorify God through preaching, teaching, evangelism, and creating technology to help the Church and her members.",
        quote: "When I became a Christian I was immediately struck by the tendency of Christians to imitate our culture of celebrity and commercializing everything. This practice was so pervasive that it seemed it couldn't be wrong. It was a breath of fresh air to read The Dorean Principle and find other Christians, both in history and today, seeing this as a problem to be repented of.",
    },
    raoul_snyman: {
        name: "Raoul Snyman",
        title: "Lead Developer of OpenLP",
        education: "",
        site: "https://openlp.org/",
        bio: "Raoul is a husband, father, homesteader, and open source enthusiast who leads OpenLP, a church presentation application. He has been freely giving OpenLP and other open source software for the last two decades, and continues to promote open source software within the Church.",
        quote: "When I first joined the open source community, I felt like the ideas were a natural fit with my Christianity. I was sad to see that few Christians seemed to agree with these ideas, or take part in open source software. I am happy to see that over the last 10 or so years there has been significant movement in freely giving software and services to the Church.",
    },
    sawyer_moranville: {
        name: "Sawyer Moranville",
        title: "Founder of Lingua Deo Gloria Ministries",
        education: "MDiv, MA in Classical Hebrew",
        site: "https://linguadeogloria.com",
        bio: "Sawyer teaches Biblical Hebrew and Greek to Christians around the world through his non-profit ministry, Lingua Deo Gloria, making the biblical languages accessible to children, everyday believers, pastors, and Bible translators.",
        quote: "The more I study Christian ministry in Scripture, the more I wrestle with the rise of paywalls around biblical teaching. Too often, the church has adopted models that restrict access to God’s Word, making it harder for believers to study the Scriptures in their original languages. When biblical education becomes inaccessible, the whole church suffers. I have devoted my life to helping restore a culture of freely giving resources that equip ordinary Christians to engage deeply with God’s Word.",
    },
}


// A list of people ids that will be randomized client-side but NOT during SSR
export const people_ids_randomized = ref(Object.keys(people))


// A function for triggering the randomization of people_ids_randomized
// WARN Can ONLY be called in a component's onMounted hook, else will cause hydration mismatch
// NOTE Ensures only run once per site load so user doesn't get confused
let have_randomized = false
export function randomize_people(){
    if (!have_randomized && !import.meta.dev){
        const random_nums = Object.fromEntries(people_ids_randomized.value.map(id => [id, Math.random()]))
        people_ids_randomized.value.sort((a, b) => random_nums[a]! - random_nums[b]!)
        have_randomized = true
    }
}
