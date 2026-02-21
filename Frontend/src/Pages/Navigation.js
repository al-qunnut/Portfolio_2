import '../Styles/homepage_styles.css';
import logo from '../Images/Al-Qunnut.png';
import { navListMenu } from '../script';


function Navigation() {
  return `
    <nav>
      <div class='mobile'>
        <div class="logo">
          <a href="#home">
            <img src="${logo}" alt="Logo" />
          </a>
        </div>
        <div class="mobile-nav">
          <button id="menu-toggle" aria-label="Toggle menu">☰</button>
        </div>
      </div>
      <ul id="nav-menu" class="hidden">
        ${navListMenu()} 
        <li>
          <button class='contactbtn' id='contact-btn'>Contact Me</button>
        </li>
      </ul>
    </nav>
  `;
}

// ✅ Export the function itself
export default Navigation;
