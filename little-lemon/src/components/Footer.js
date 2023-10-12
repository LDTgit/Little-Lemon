function Footer() {
    return (
      <footer>
        <section>
          <img src={require('../images/LogoLitttleLemon.svg').default} alt='Little Lemon Logo' />
        </section>
        <section>
          <h5>Doormat Navigation</h5>
          <menu>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Menu</a></li>
            <li><a href="/#">Reservations</a></li>
            <li><a href="/#">Order Online</a></li>
            <li><a href="/#">Login</a></li>
          </menu>
        </section>
        <section>
          <h5>Contact</h5>
          <menu>
            <li>Adress</li>
            <li>Phone number</li>
            <li>Email</li>
          </menu>
        </section>
        <section>
          <h5>Social Media Links</h5>
          <menu>
            <li><a href="/#">Facebook</a></li>
            <li><a href="/#">Instagram</a></li>
            <li><a href="/#">Twitter</a></li>
          </menu>
        </section>
      </footer>
    );
  }
  
export default Footer;