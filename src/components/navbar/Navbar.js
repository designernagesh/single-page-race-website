import './NavbarStyles.scss';
import { Link } from 'react-scroll';
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
import { GiCarWheel } from 'react-icons/gi'
import { useState } from 'react';

const Navbar = () => {
    const [ nav, setNav ] = useState(false);

    const sliderhandler = () => {
        setNav(!nav);
    }
    const menuIconHandler = () => setNav(!nav);
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <h3>Race.</h3>
                </div>
                <ul className={ nav ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="power" onClick={sliderhandler} spy={true} smooth={true} duration={500}>Power</Link></li>
                    <li><Link to="speed" onClick={sliderhandler} spy={true} smooth={true} duration={500}>Speed</Link></li>
                    <li><Link to="handling" onClick={sliderhandler} spy={true} smooth={true} duration={500}>Handling</Link></li>
                    <li><Link to="options" onClick={sliderhandler} spy={true} smooth={true} duration={500}>Options</Link></li>
                    <li><Link to="contact" onClick={sliderhandler} spy={true} smooth={true} duration={500}>Contact</Link></li>

                    <div className='mobile-menu'>
                        <button>Shop</button>
                        <button>Account</button>
                        <div className="social-icons">
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <GiCarWheel className='icon' />
                        </div>
                    </div>
                </ul>
                <ul className='nav-menu hide'>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Account</a></li>
                </ul>

                <div className="hamburger" onClick={menuIconHandler}>
                    {
                        nav ? <FaTimes className='icon' /> : <FaBars className='icon' /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;