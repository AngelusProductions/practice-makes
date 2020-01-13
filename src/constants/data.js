export const cities = [
  {
    name: "Boston",
    linkUrl: "/cities/boston",
    photoUrl:
      "https://practice-makes-production.s3.amazonaws.com/boston/assets/boston-main.png",
    about: `Boston's Practice Makes meetup is a monthly exploration of all things design hosted at Intrepid. Intrepid is a fully integrated digital product creation studio within Accenture, that focuses on mobile apps, websites, connected devices and IoT experiences; headquartered in Cambridge, MA. At 180+ and growing, our designers, developers, product strategists, project managers and more, spin their chairs around to collaborate on cross functional team endeavors.`,
    addressTop: "+222 3rd St. Suite 4000",
    addressBottom: "Cambridge, MA 02142",
    events: [
      {
        name: "Empowerment",
        subtitle: "Empowerment with Ladies that UX",
        description:
          "We all face adversity in our jobs and our everyday lives. Sometimes all we can do is shake our fists in and hope that it will get better. It's times when we gather and share our stories and experiences that we can empower ourselves and each other. Let us do just that, as we share food, drink, and conversation. Join us the evening of August 15th to hear from our lineup of speakers talk about how they have empowered themselves and others in the design field! ",
        details:
          "All are welcome to this event regardless of how they identify. Can’t make it anymore? No problem! Just be sure to update your RSVP so someone else can take your spot.",
        date: new Date(2019, 7, 15),
        addressTop: "+222 3rd St. Suite 4000",
        addressBottom: "Cambridge, MA 02142",
        linkUrl:
          "https://www.eventbrite.com/e/practice-makes-empowerment-co-hosted-with-ladies-that-ux-tickets-65596343429#",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/events/boston-events-empowerment.png",
      },
      {
        name: "Process",
        subtitle: "Enjoying the UX of UX",
        description:
          "Process is an often-charged subject. It can be humbling–even terrifying to shed light on the experiments and mistakes we face leading up to even our greatest works. We dream to get to that finished product promptly and unscathed by mishap, but is that really what we want?",
        details:
          "Let’s set aside that final_seriously_this_time_FINAL folder and explore the experiences that get us to the “Final”. We’re talking about the good stuff: Inspiration, iteration, testing and feedback, creative havens of time and space, the ups and downs of trial and error—let’s celebrate the beauty and joy (some may use other words) of what we do. We’ll see you there!",
        date: new Date(2019, 5, 6),
        addressTop: "+222 3rd St. Suite 4000",
        addressBottom: "Cambridge, MA 02142",
        linkUrl:
          "https://www.eventbrite.com/e/practice-makes-process-a-design-meetup-tickets-61232663545#",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/events/boston-events-process.png",
      },
      {
        name: "Empathy",
        subtitle: "How do my users feel?",
        description:
          "Empathy as a concept and skillset is thoroughly married to human centered design and design thinking. Having empathy is not only vital to our jobs and our work, but in every interaction and exchange we have. We rarely, however, talk about concrete ways to practice empathy. At Practice Makes: Empathy, we will discuss and learn how to be empathetic towards our users, clients, coworkers, and more.",
        details:
          "We're obsessed with how our customers behave and modern behavioral research has shown that emotions drive our decisions. Let's talk about how to manage that as a product designer, developer or manager!",
        date: new Date(2019, 3, 4),
        addressTop: "+222 3rd St. Suite 4000",
        addressBottom: "Cambridge, MA 02142",
        linkUrl:
          "https://www.eventbrite.com/e/practice-makes-empathy-tickets-57835793415#",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/events/boston-events-empathy.png",
      },
      {
        name: "Identity",
        subtitle: "Redefining your workplace yourself",
        description:
          "As designers and creative technologists, questions of identity arise in every aspect of our work: How does this design reflect the business's brand identity? How do I consider and account for the identities of the people who use this product? How does this work represent my identity as a professional?\n\nWe live and work in environments constantly asking us to understand, define, and redefine who we are. Even though the average doctor's form or government census seems to suggest that putting people into discrete buckets based on race, class, sexual orientation, or gender is as easy as a simple checkmark in a box, questions of identity can be complicated and messy.",
        details:
          "Join us at Practice Makes: Identity as we explore how our backgrounds shape our perspectives as creators, the importance of being considerate in designing for the identities of our users, and the impact that our work can have on helping others understand and redefine their sense of self.",
        date: new Date(2018, 11, 6),
        addressTop: "+222 3rd St. Suite 4000",
        addressBottom: "Cambridge, MA 02142",
        linkUrl:
          "https://www.eventbrite.com/e/practice-makes-identity-tickets-51754936408#",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/events/boston-events-identity.png",
      },
      {
        name: "Tricks & Treats",
        subtitle: "Spooky new paridigms and the Dark UX",
        description:
          "All Hallows' Eve approaches! Join our creative coven as we meet under the full moon (overhead fluorescent lights) in the dark wild lands of our ancestors (an open floorplan office) to share some devilish brew(ski)s and design stories of horror and delight! We’ll explore some design tricks we can use — or that can be used against us — in order to create magical experiences. The real question will be: should you use your new powers for good or for evil?",
        details:
          "At “Practice Makes: Tricks and Treats”, learn about the dangers and counterattacks to Dark UX, inventing new paradigms in an augmented reality hide and seek game, and creating other worlds in Live Action Role Playing game design.\n\nFood and drinks will be provided!",
        date: new Date(2018, 9, 24),
        addressTop: "+222 3rd St. Suite 4000",
        addressBottom: "Cambridge, MA 02142",
        linkUrl:
          "https://www.eventbrite.com/e/practice-makes-tricks-and-treats-tickets-50937894614#",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/events/boston-events-tricks-&-treats.png",
      },
      {
        name: "Imperfect",
        subtitle: "Turning mistakes into magic",
        description:
          "Oftentimes the best ideas come from total accidents, determined iterations and throwing a test into the world for feedback. Learn how to own failure, without fear and turn it into a strategically useful tactic in your creative process arsenal.",
        details:
          'Join us for our Series Kickoff "Practice Makes: Imperfect" at Intrepid! Designers and Developers will explore how to transform imperfect moments into magic moments on our projects and day-to-day interactions.\n\nCome hungry and early — free food and drinks will be provided!',
        date: new Date(2018, 4, 3),
        addressTop: "+222 3rd St. Suite 4000",
        addressBottom: "Cambridge, MA 02142",
        linkUrl:
          "https://www.eventbrite.com/e/practice-makes-imperfect-tickets-44966436823#",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/events/boston-events-imperfect.png",
      },
      {
        name: "Humans",
        subtitle: "Bridging the gap between ",
        description:
          "Emerging technologies not only augment our experiences as human beings, but have also begun to redefine our understanding of what it means to be a human. Through the deliberate use of tone, language, and image, we infuse human elements into digital products in order to cross the barriers between technology and user, in order to better understand one another and to better understand ourselves.",
        details:
          "Join us at “Practice Makes: Humans” to explore projects that leverage emerging technologies and empathetic design, including a self-assessment tool that helps improve runners’ forms by leveraging a phone’s unique capabilities and a robot with human-like characteristics and personality.\n\nFood and drinks will be provided!",
        date: new Date(2018, 6, 11),
        addressTop: "+222 3rd St. Suite 4000",
        addressBottom: "Cambridge, MA 02142",
        linkUrl:
          "https://www.eventbrite.com/e/practice-makes-humans-tickets-46918559675#",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/events/boston-events-humans.png",
      },
    ],
    team: [
      {
        firstName: "Danielle",
        lastName: "Teig",
        job: "UX Designer, Manager",
        linkUrl: "http://www.danielleteig.net/",
        photoUrl:
          "https://media.licdn.com/dms/image/C4E03AQFwsXOJrzyV1Q/profile-displayphoto-shrink_800_800/0?e=1580947200&v=beta&t=phSDyQGtoA0LOT6BHTnkhdUJ9YftUlDmbyWaye_4RkU",
      },
      {
        firstName: "Julia",
        lastName: "Paranay",
        job: "UX Designer",
        linkUrl: "https://www.linkedin.com/in/juliaparanay/",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/team/boston-team-julia-paranay.png",
      },
      {
        firstName: "Meli",
        lastName: "Kim",
        job: "UX Designer",
        linkUrl: "https://www.linkedin.com/in/mejiki/",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/team/boston-team-meli-kim.png",
      },
      {
        firstName: "Martha",
        lastName: "Carl",
        job: "Creative Director",
        linkUrl: "https://www.linkedin.com/in/martha-carl/",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/team/boston-team-martha-carl.png",
      },
      {
        firstName: "Tim",
        lastName: "Poli",
        job: "UX Designer",
        linkUrl: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/team/boston-team-tim-poli.png",
      },
      {
        firstName: "Elisabeth",
        lastName: "Bowerman",
        job: "UX Designer",
        linkUrl: "https://www.linkedin.com/in/elisabeth-bowerman-0ab96189/",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/team/boston-team-elisabeth-bowerman.png",
      },
      {
        firstName: "Dan",
        lastName: "Murphy",
        job: "Senior UX Designer",
        linkUrl: "https://www.linkedin.com/in/dan-murphy-464b9512/",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/team/boston-team-dan-murphy.png",
      },
      {
        firstName: "Cody",
        lastName: "Johnston",
        job: "Brand Designer, Art Director",
        linkUrl: "www.codyjohnston.design",
        photoUrl:
          "https://practice-makes-production.s3.amazonaws.com/boston/team/boston-team-cody-johnston.png",
      },
    ],
    assets: {
      main:
        "https://practice-makes-production.s3.amazonaws.com/boston/assets/boston-main.png",
      alt:
        "https://practice-makes-production.s3.amazonaws.com/boston/assets/boston-alt.png",
      skyline: {
        top:
          "https://practice-makes-production.s3.amazonaws.com/boston/assets/boston-skyline-top.png?versionId=null",
        bottom:
          "https://practice-makes-production.s3.amazonaws.com/boston/assets/boston-skyline-bottom.png",
        waves:
          "https://practice-makes-production.s3.amazonaws.com/boston/assets/boston-skyline-waves.png",
      },
      about: {
        alt:
          "https://practice-makes-production.s3.amazonaws.com/boston/assets/boston-about-alt.png",
        process:
          "https://practice-makes-production.s3.amazonaws.com/boston/assets/boston-about-top.png",
        bottom:
          "https://practice-makes-production.s3.amazonaws.com/boston/assets/boston-about-bottom.png",
      },
      twitter:
        "https://practice-makes-production.s3.amazonaws.com/UI/twitter.png",
      instagram:
        "https://practice-makes-production.s3.amazonaws.com/UI/instagram.png",
    },
  },
  {
    name: "Houston",
    linkUrl: "/cities/houston",
    photoUrl:
      "https://practice-makes-production.s3.amazonaws.com/houston/assets/houston-main.png",
    about: null,
    events: [],
    team: [],
    assets: {},
  },
]
