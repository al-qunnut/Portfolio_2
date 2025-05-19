import '../Styles/homepage_styles.css';
import logo from '../Images/Al-Qunnut.png';
import { navListMenu, contactIcons } from '../script';

function Footer() {
  const date = new Date;
  return `
  <div>
    <div class='Footer'>
      <div>
        <div class="logo">
          <img src="${logo}" alt="Logo" />
        </div>
         <p>Turning code into creations and clicks into connections - tech meets strategy!</p>
         <div>
              <div class='Footer_icons'>
               ${contactIcons()}
              </div>
         </div>
      </div>
      <div>
         <ul class='Footer_menu'>
          ${navListMenu()} 
         </ul>
      </div>
      <div>
         <h2>Subscribe to my  Newsletter</h2>
         <p>Join my newsletter channel subscribers </p>
         <input type='email' value='' placeholder='Enter your email ro subscribe...' required />
         <button type='submit'>Subscribe</button>
      </div>
      </div>
      <div class='copyright'>
         <p>All rights Reserved &copy; copyright ${date.getFullYear()}</p>
      </div>
    </div>
  `;
}

// ✅ Export the function itself
export default Footer;
