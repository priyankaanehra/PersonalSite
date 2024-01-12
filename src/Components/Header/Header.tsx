
import React from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../../assets/linkedin.jpeg'
import hamburger from '../../assets/hamburger.png'
import './Header.css'


const Header = () => {
    return (
    <nav className="navbar">
        <div className="navbar-left">
            <ul> 
                <li><Link to='/' className="logo-block">
                    <h4 className="logo-text">PN</h4>
                </Link></li>
            </ul>
        </div>
        <div>
            <ul className="navbar-right">
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>RESUME</Link></li>
                <li><Link to='/contact'>CONTACT</Link></li>
                <li><Link to="https://www.linkedin.com/in/priyanka-nehra-94386b155/" target='_blank'>
                        <img src={linkedin} alt="linkedin logo" className="linkedin-logo-nav"/>
                    </Link>
                </li>
            </ul>
        </div>
        
    </nav>)
}
  
  export default Header;