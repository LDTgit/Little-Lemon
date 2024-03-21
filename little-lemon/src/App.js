import './App.css';
import Header from  './components/Header';
import Nav from  './components/Nav';
import Main from  './components/Main';
import Footer from  './components/Footer';
import {useState} from 'react';


function App() {
  const [toggle, setToggle] = useState(false);
    function changeToggle() {
      setToggle(!toggle);
    }

  return (
    <>
      <section className="logo-nav">
        <Header />
        <div className='navContainer'>
          <Nav toggle={toggle} changeToggle={changeToggle}/>
        </div>
      </section>
      <Main toggle={toggle} changeToggle={changeToggle}/>
      <Footer />
    </>
  );
}

export default App;
