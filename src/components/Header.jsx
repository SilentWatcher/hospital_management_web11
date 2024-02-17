// import Logo from '../assets/navbar/logo_.svg'
import Logo from '../assets/navbar/logo.png'
import '../style/header.css'
import {Link, NavLink } from 'react-router-dom'
import Blob from '../assets/home/homeblob.png'

function Header() {
  return (
    <>
    <header>
        <nav>
            <div className="logo">
                <NavLink className='custom_nav_link logoImg' to='/'><img src={Logo} alt="logo" /></NavLink>
                <NavLink className='custom_nav_link' to='/'><h2 >HealthHub</h2></NavLink>
            </div>
            <ul>
                <li><NavLink className='custom_nav_link' to='/'>Home</NavLink></li>
                <li><NavLink className='custom_nav_link' to='appointment'>Appointment</NavLink></li>
                <li><NavLink className='custom_nav_link' to='about'>About Us</NavLink></li>
                <li><NavLink className='custom_nav_link' to='contact'>Contact Us</NavLink></li>
                <li><NavLink className='custom_nav_link' to='services'>Services</NavLink></li>
            </ul>

            
        <div className='login_register'>
          <Link to='/login'><button className="sign-in"><span>Sign In</span></button></Link>
          <Link to='/register'><button className="register">Register</button></Link>
          
        </div>

        </nav>
        <img className='blob' src={Blob} alt="blob " />

    </header>
    </>
  )
}

export default Header