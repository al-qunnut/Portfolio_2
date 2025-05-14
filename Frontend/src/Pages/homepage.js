import '../Styles/homepage_styles.css';
import { navLists } from '../script';
import { Projects } from '../script';
import logo from '../Images/Al-Qunnut.png';
import anime from '../Images/anime.png';
import Dashboard from '../Images/Dashboard.png'
import Dashboard2 from '../Images/Dashboard2.png'
import Dashboard3 from '../Images/Dashboard3.png'
import SignUp from '../Images/SignUp.png'

const navListMenu = () => {
  return navLists.map(navList => (
    `<li>
      <a href="${navList.href}">
        ${navList.name}
      </a>
    </li>`
  )).join('');
};

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
  document.querySelector('#homepage').innerHTML = `
    <div>
      <!-- Navigation -->
      <div class='home'>
        <nav>
          <div class='mobile'>
            <div class="logo">
              <img src="${logo}" alt="Logo" />
            </div>
            <div class="mobile-nav">
              <button id="menu-toggle">☰</button>
            </div>
          </div>
          <ul id="nav-menu" class="hidden">
            ${navListMenu()} 
            <div>
              <button class='contactbtn'>Contact Me</button>
            </div>
          </ul>
        </nav>

        <!-- Home -->
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

        <!-- Projects -->
        <div>
          <div class='Projects'>
            <h2>Personal Web Projects</h2>
            <div class='projectCards'>
              ${ProjectList()} 
            </div>
          </div>

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
            <div>
              <h2>Check out my designs...</h2>
              <img src='${Dashboard.png}' alt="design" />
              <img src='${Dashboard2.png}' alt="design" />
              <img src='${Dashboard3.png}' alt="design" />
              <img src='${SignUp.png}' alt="design" />
            </div>
          </div>
        </div>

        <!-- About -->
        <div class='About'>
          <div>
            <!-- More content -->
          </div>
        </div>
      </div>
    </div>
  `;

  // Menu toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });

  // Typed.js animation
  var typed = new Typed('.auto-type', {
    strings: ["WEB DEVELOPER", "DIGITAL MARKETER"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });

  // ✅ Counter logic (must be inside here!)
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
  let number2 = 0;
  const counterElement2 = document.getElementById('counter2');

  const intervalId2 = setInterval(() => {
    counterElement2.textContent = number2;
    number2++;

    if (number2 > 250) {
      clearInterval(intervalId);
      counterElement2.textContent = "250+";
    }
  }, 100);
  
}

loadHomePage();
