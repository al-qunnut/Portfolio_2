import '../Styles/homepage_styles.css';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import { designs, Projects } from '../script';
import anime from '../Images/anime.png';
import MyImage from '../Images/MyImage.png';
import logo from '../Images/Al-Qunnut.png'; // You forgot to import this here

// Generate Design Components
const designsComp = () => {
  return designs.map(design => (
    `<img src="${design.href}" class='design_images'/>`
  )).join('');
};

// Generate Project Cards
const ProjectList = () => {
  return Projects.map(project => (
    `<div class='card'>
      <img src="${project.src}" alt="card" class='Card-img'/>
      <dd class='details'>
        <h2>${project.title}</h2>
        <p>${project.text}</p>
      </dd>
      <button>
        <a href='${project.href}'>View</a>
      </button>
    </div>`
  )).join('');
};

function loadHomePage() {
  // Inject the full HTML
  document.querySelector('#homepage').innerHTML = `
    <div class='home'>
      
      <!-- Navigation -->
      <div id='nav'>
        ${Navigation()}
      </div>

      <!-- Home Section -->
      <div class='Home-content'>
        <div class='Home-text'>
          <h3>Hello! I'm <img src="${logo}" alt="Logo" /></h3>
          <h1>I'm a <span class='auto-type'></span></h1>
          <p>Turning code into creations and clicks into connections - tech meets strategy!</p>
        </div>
        <div class='Home-image'>
          <img src="${anime}" alt="anime" class='Home-img'/>
        </div>
      </div>

      <!-- About Section -->
      <div class='About'>
        <div class='About_image'>
          <img src='${MyImage}' alt='my image' class='About_img'/>
        </div>
        <div class='About_content'>
          <h3>About Me</h3>
          <p>Hi, I'm a web developer and digital marketer with love for technology. I enjoy creating websites that are fast, clean, and easy to use—and I'm always exploring better ways to help people and businesses grow online. I'm a tech enthusiast at heart, always curious, always learning. Whether it's building something from scratch or digging into analytics to see what's working, I like finding smart ways to make things better.</p>
          <p>If it's digital, I'm probably into it.</p>
          <button>See more about me...</button>
        </div>
      </div>

      <!-- Projects Section -->
      <div class='Projects'>
        <h2>Personal Web Projects</h2>
        <div class='projectCards'>
          ${ProjectList()} 
        </div>
      </div>

      <!-- Designs Section -->
      <div>
        <h2>Check out my designs...</h2>
        <div class='designs'>
          ${designsComp()}
        </div>
      </div>

      <!-- Digital Projects Counter Section -->
      <div class='DigitalProjects'>
        <div>
          <h2>Over <b id="counter"></b></h2>
          <p>Marketing Campaigns</p>
        </div>
        <div>
          <h2>Over <b id="counter2"></b></h2>
          <p>Digital Marketing Content</p>
        </div>
      </div>

      <!-- More Works -->
      <div class='moreWorks'>
        <button>Check more of my works...</button>
      </div>
      

      <div>
         ${Footer()}
      </div>
    </div>
  `;

  // Attach mobile menu toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  toggleBtn?.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });

  // Typed.js Animation
  var typed = new Typed('.auto-type', {
    strings: ["WEB DEVELOPER", "DIGITAL MARKETER"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });

  // Counter 1
  let number = 0;
  const counterElement = document.getElementById('counter');
  const intervalId = setInterval(() => {
    counterElement.textContent = number;
    number++;
    if (number > 100) {
      clearInterval(intervalId);
      counterElement.textContent = "100+";
    }
  }, 100);

  // Counter 2
  let number2 = 0;
  const counterElement2 = document.getElementById('counter2');
  const intervalId2 = setInterval(() => {
    counterElement2.textContent = number2;
    number2++;
    if (number2 > 250) {
      clearInterval(intervalId2);
      counterElement2.textContent = "250+";
    }
  }, 100);
}

// Run the homepage setup
loadHomePage();
