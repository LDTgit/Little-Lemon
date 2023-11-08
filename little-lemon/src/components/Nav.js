function Nav() {
  let width = window.innerWidth;
     if (width < 690) {
       return (
         <div>
          <img src={require('../images/🦆 icon _hamburger menu_.svg').default} alt='hamburger menu' />
         </div>
       );
     } else {
      return (
        <nav>
          <menu>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Menu</a></li>
            <li><a href="/#">Reservations</a></li>
            <li><a href="/#">Order Online</a></li>
            <li><a href="/#">Login</a></li>
          </menu>
        </nav>
      );
    }
  }

export default Nav;