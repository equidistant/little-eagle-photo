const imgUrl = process.env.REACT_APP_IMG_URL

const content = {
  home: [
    {
      src: `${imgUrl}/people/img0.jpg`,
      title: 'People',
      url: '/gallery/people'
    },
    {
      src: `${imgUrl}/travels/img0.jpg`,
      title: 'Travels',
      url: '/gallery/travels'
    },
    {
      src: `${imgUrl}/details/img0.jpg`,
      title: 'Details',
      url: '/gallery/details'
    },
    {
      src: `${imgUrl}/projects/chill-vibez-battles/img3.jpg`,
      title: 'Projects',
      url: '/gallery/projects'
    }
  ],
  projects: [
    {
      src: `${imgUrl}/gallery/projects/chill-vibez-battles/img0.jpg`,
      title: 'Chill Vibez Battles',
      url: '/gallery/projects/chill-vibez-battles'
    },
    {
      src: `${imgUrl}/gallery/projects/supeus-case-study/img0.jpg`,
      title: 'Supeus Case Study',
      url: '/gallery/projects/supeus-case-study'
    }
  ]
}

export default content
