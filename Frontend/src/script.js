import './Styles/homepage_styles.css';
import News from './Images/News.png';
import Pericare from './Images/Pericare.png';
import Carserra from './Images/Carserra.png';
import Dashboard from './Images/Dashboard.png';
import Dashboard2 from './Images/Dashboard2.png';
import Dashboard3 from './Images/Dashboard3.png';
import SignUp from './Images/SignUp.png';


export const navListMenu = () => {
  return navLists.map(navList => (
    `<li>
      <a href="${navList.href}">
        ${navList.name}
      </a>
    </li>`
  )).join('');
};
export const contactIcons = () => {
  return (
 `<a href="https://wa.me/+2347065667063" target="_blank" rel="noopener">
    <i class="fa-brands fa-whatsapp"></i>
  </a>
  <a href="tel:+2347065667063">
   <i class="fa-solid fa-phone"></i>
  </a>
  <a href='www.linkedin.com/in/al-qunnut-oshodilawal' target="_blank" rel="noopener">
   <i class="fa-brands fa-linkedin"></i>
  </a>
  <a href='https://github.com/al-qunnut' target="_blank" rel="noopener">
    <i class="fa-brands fa-square-github"></i> 
  </a>
  <a href='mailto:oshodilawalalqunnut@gmail.com'>
    <i class="fa-solid fa-envelope"></i>
  </a>`
  )
};


export const navLists = [
  {
    id: 1,
    href: "#",
    name: 'Home'
  },
  {
    id: 2,
    href: "../src/Pages/Projects.js",
    name: 'Projects'
  },
  {
    id: 3,
    href: "#",
    name: 'About'
  },
  {
    id: 4,
    href: "#",
    name: 'Blog'
  }
]

export const designs = [
  {
    id: 1,
    href: Dashboard2,
  },
  {
    id: 2,
    href: Dashboard3,
  },
  {
    id: 3,
    href: Dashboard,
  },
  {
    id: 4,
    href: SignUp,
  }
  ]
export const Projects =[
  {
     id: 1,
     src: News,
     title: "News and Travels",
     text: 'With a modern aesthetic and intuitive navigation, it highlights key features and a visually appealing layout. its polished design creates a compelling digital experience.',
     href: 'https://news-lemon-gamma.vercel.app/'
  },
  {
     id: 2,
     src: Pericare,
     title: "Pericare",
     text: 'PeriCare: Supporting Your Perinatal Mental Health Expert resources, community support, and professional guidance for a healthy pregnancy, childbirth, and postpartum journey.',
     href: 'https://peri-care-av67.vercel.app/'
  },
  {
     id: 3,
     src: Carserra,
     title: "Carserra",
     text: 'Carserra is a visually striking landing page designed to showcase an excellent user interface. With a sleek, modern design and intuitive navigation,it is aesthetic and easy to use.',
     href: 'https://mecho.vercel.app/'
  },
 
]



