import '../style/footer.css'
import Logo from '../assets/navbar/logo.png'

// IMPORT ICONS FOR FOOTER CALL MAIL AND LOCATION 
import Call from '../assets/footer/call.svg'
import Mail from '../assets/footer/mail.svg'
import Location from '../assets/footer/location.svg'

import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className="logo">
          <img src={Logo} alt="Logo" /> <span>HealthHub</span>
        </div>
        <div className="quick_links">
          <h2>Quick Links</h2>
            <ul>
                <li><NavLink className='custom_nav_link' to='/'>Home</NavLink></li>
                <li><NavLink className='custom_nav_link' to='appointment'>Appointment</NavLink></li>
                <li><NavLink className='custom_nav_link' to='about'>About Us</NavLink></li>
                <li><NavLink className='custom_nav_link' to='contact'>Contact Us</NavLink></li>
                <li><NavLink className='custom_nav_link' to='services'>Services</NavLink></li>
            </ul>
        </div>
        <div className="hours">
          <h2>Hours</h2>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Opened</th>
                <th>Closed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>9:00 AM</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>9:00 AM</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>9:00 AM</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>9:00 AM</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>9:00 AM</td>
                <td>6:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <div>
            <div><span><img src={Call} alt="call" /></span> 100203030</div>
            <div><span><img src={Mail} alt="mail" /></span>  healthhub@email.com</div>
            <div> <span><img src={Location} alt="location" /></span>  Mumbai, india </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer