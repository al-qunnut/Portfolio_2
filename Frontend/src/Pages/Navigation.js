import '../Styles/homepage_styles.css';
import logo from '../Images/Al-Qunnut.png';
import { navListMenu } from '../script';


function Navigation() {
  return `
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
  `;
}

// ✅ Export the function itself
export default Navigation;
