import './App.css';
import Header from  './components/Header';
import Nav from  './components/Nav';
import Footer from  './components/Footer';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <section className="logo-nav">
        <Header />
        <div className='navContainer'>
          <Nav />
        </div>
      </section>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
