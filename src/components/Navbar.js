import React, { useState, useEffect} from 'react'
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click , setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleclick = () => setClick(!click)
  const closeMobilemenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

    return (
    <>
      <nav className="navbar">  
       <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobilemenu}> 
            TRAVEL <i className='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleclick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}  />  
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobilemenu}>
              Home
            </Link>
            </li> 
            <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobilemenu}>
              Services
            </Link>
            </li>
            <li>
            <Link to='/products' className='nav-links' onClick={closeMobilemenu}>
              Products
            </Link>
            </li>
            <li>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobilemenu}>
              Sign-up
            </Link>
            </li> 
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>  
      </nav>
    </>
  )
}

export default Navbar
