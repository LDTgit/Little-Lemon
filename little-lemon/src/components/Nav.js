// import { styled } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { stack as Menu } from 'react-burger-menu';

const CustomBurgerIcon = () => <img src={require('../images/🦆 icon _hamburger menu_.svg').default} alt='hamburger menu' className='hamburgerImg'/>;

function Nav() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions)

  }, []);

  // let width = window.innerWidth;
     if (width < 690) {
       return (
        <Menu right width={ '60%' } customBurgerIcon={ <CustomBurgerIcon /> }>
        <li><a id="home" className="menu-item-sm" href="/">Home</a></li>
        <li><a id="about" className="menu-item-sm" href="/">About</a></li>
        <li><a id="menu" className="menu-item-sm" href="/">Menu</a></li>
        <li><a id="reservations" className="menu-item-sm" href="/about">Reservations</a></li>
        <li><a id="orderOnline" className="menu-item-sm" href="/contact">Order Online</a></li>
        <li><a id="login" className="menu-item-sm" href="/about">Login</a></li>
      </Menu>
       );
     } else {
      return (
        <nav>
          <menu>
            <li><a id="home" className="menu-item" href="/">Home</a></li>
            <li><a id="about" className="menu-item" href="/">About</a></li>
            <li><a id="menu" className="menu-item" href="/">Menu</a></li>
            <li><a id="reservations" className="menu-item" href="/about">Reservations</a></li>
            <li><a id="orderOnline" className="menu-item" href="/contact">Order Online</a></li>
            <li><a id="login" className="menu-item" href="/about">Login</a></li>
          </menu>
        </nav>
      );
    }
  }

export default Nav;