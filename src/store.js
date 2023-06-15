import { reactive } from 'vue';

export const store = reactive({
  headerNavbar: [
    {
      text: 'HOME',
      url: '#',
      current: false
    },
    {
      text: 'ABOUT',
      url: '#',
      current: false
    },
    {
      text: 'PROJECTS',
      url: '#',
      current: false
    },
    {
      text: 'PROCESS',
      url: '#',
      current: true
    },
    {
      text: 'TESTIMONIALS',
      url: '#',
      current: false
    }
  ],
  mainBusiness: [
    {
      title: 'Human Capital',
      description: 'Humanizing business: Harness the power of technology to improve the way people work.',
      icon: 'fa-solid fa-users bg-color-green'
    },
    {
      title: 'Core Business',
      description: 'It takes innovative approaches to transform,modernize, and run existing platforms.',
      icon: 'fa-solid fa-globe bg-color-green'
    },
    {
      title: 'Performance',
      description: 'Achieving maximum impact and value from investments in finance and supply chain.',
      icon: 'fa-solid fa-gauge-high bg-color-green'
    }
  ],
  mainCompany: [
    {
      number: 0,
      title: 'Employees',
      description: 'Lorem ipsum ciao e a domani'
    },
    {
      number: 0,
      title: 'Partners',
      description: 'Lorem ipsum ciao e a domani'
    },
    {
      number: 0,
      title: 'Customers',
      description: 'Lorem ipsum ciao e a domani'
    }
  ],
  mainActionNav: [
    {
      text: 'ALL',
      url: '#',
      current: true
    },
    {
      text: 'INSTITUTIONAL',
      url: '#',
      current: false
    },
    {
      text: 'SOCIAL',
      url: '#',
      current: false
    },
    {
      text: 'EVENTS',
      url: '#',
      current: false
    },
    {
      text: 'INNOVATION',
      url: '#',
      current: false
    },
    {
      text: 'ENVIRONMENT',
      url: '#',
      current: false
    },
    {
      text: 'TECHNOLOGY',
      url: '#',
      current: false
    }
  ],
  mainActionCards: [
    {
      text: 'Academic professional program in social media',
      img: 'project-1.jpg',
      alt: 'Academic'
    },
    {
      text: 'President\'s speech at the annual meeting',
      img: 'project-2.jpg',
      alt: 'Speech'
    },
    {
      text: 'International business trip in Shanghai',
      img: 'project-3.jpg',
      alt: 'Trip Shanghai'
    },
    {
      text: 'Technology workshop with education theme',
      img: 'project-4.jpg',
      alt: 'Workshop'
    },
    {
      text: 'Donation of clothes and food to the partner NGO',
      img: 'project-5.jpg',
      alt: 'Donation clothes'
    },
    {
      text: 'Confraternization of the procurement team',
      img: 'project-6.jpg',
      alt: 'Confraternization'
    }
  ],
  mainProcess: [
    {
      number: '01',
      text: 'Collection of information',
      description: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      number: '02',
      text: 'Strategic planning',
      description: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      number: '03',
      text: 'Assignment of responsibilities',
      description: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      number: '04',
      text: 'Formatting process',
      description: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      number: '05',
      text: 'Continuity Formalization',
      description: 'Lorem ipsum dolor sit amet consectetur'
    }
  ],
  mainFeedback: [
    {
      img: 'logo-1.png',
      company: 'WooCommerce',
      description: 'We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.'
    },
    {
      img: 'logo-2.png',
      company: 'Wordpress',
      description: 'We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.'
    },
    {
      img: 'logo-3.png',
      company: 'Pingdom',
      description: 'We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.'
    },
    {
      img: 'logo-4.png',
      company: 'JQuery',
      description: 'We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.'
    },
    {
      img: 'logo-5.png',
      company: 'Less',
      description: 'We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.'
    }
  ],
  contacts: [
    {
      icon: 'fa-solid fa-phone',
      text: '+1 (305) 1234-5678'
    },
    {
      icon: 'fa-solid fa-envelope',
      text: 'hello@example.com'
    },
    {
      icon: 'fa-solid fa-location-dot',
      text: 'Main Avenue, 987'
    }
  ]
})
