import './App.css';
import Header from  './components/Header';
import Nav from  './components/Nav';
import Main from  './components/Main';
import Footer from  './components/Footer';


function App() {
  return (
    <>
      <section className="logo-nav">
        <Header />
        <div className='navContainer'>
          <Nav />
        </div>
      </section>
      <Main />
      <Footer />
    </>
  );
}

export default App;
