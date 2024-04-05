import React from 'react';
import { useEffect, useState } from 'react';
import { stack as Menu } from 'react-burger-menu';
// import { Link } from 'react-router-dom';

const CustomBurgerIcon = () => <img src={require('../images/🦆 icon _hamburger menu_.svg').default} alt='hamburger menu' className='hamburgerImg' />;

function Nav() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, []);

  const [isOpen, setOpen] = useState(false);

  // function toggleAndCloseMenu(event) {
  //   changeToggle();
  //   setOpen(false);
  //   if (event) {
  //     event.preventDefault();
  //   }
  // }


  if (width < 480) {
    return (
      <Menu right width={'60%'} customBurgerIcon={<CustomBurgerIcon />} isOpen={isOpen} onStateChange={(state) => setOpen(state.isOpen)}>
        <li><a href="/" id="home" className="menu-item-sm">Home</a></li>
        <li><a href="/#aboutSection" id="about" className="menu-item-sm">About</a></li>
        <li><a id="menu" className="menu-item-sm" href="/menu">Menu</a></li>
        {/* <li><a id="reservations" className="menu-item-sm" href='/' onClick={toggleAndCloseMenu}>Reservations</a></li> */}
        <li><a id="orderOnline" className="menu-item-sm" href="/">Order Online</a></li>
        <li><a id="login" className="menu-item-sm" href="/">Login</a></li>
      </Menu>
    );
  } else {
    return (
      <nav>
        <menu>
          <li><a href="/" id="home" className="menu-item">Home</a></li>
          <li><a href="/#aboutSection" id="about"  className="menu-item">About</a></li>
          <li><a id="menu" className="menu-item" href="/menu">Menu</a></li>
          {/* <li><a id="reservations" className="menu-item" href='#book-button' onClick={changeToggle}>Reservations</a></li> */}
          <li><a id="orderOnline" className="menu-item" href="/">Order Online</a></li>
          <li><a id="login" className="menu-item" href="/">Login</a></li>
        </menu>
      </nav>
    );
  }
}

export default Nav;