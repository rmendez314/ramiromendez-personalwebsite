import './App.css';
import { useRef } from 'react';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import About from './components/about/About';
import ScrollToTop from './components/scrollToTop/ScrollToTop.js';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';



function App() {

  const header = useRef(null);
  const nav = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);
  const footer = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  }

  return (
    <div className="App">
      <ScrollToTop />
      <div className="hero">
        <ul className='list'>
          <li onClick={() => scrollToSection(home)} className="link">
            Home
          </li>
          <li onClick={() => scrollToSection(about)} className="link">
            About
          </li>
          <li onClick={() => scrollToSection(experience)} className="link">
            Experience
          </li>
          <li onClick={() => scrollToSection(contact)} className="link">
            Contact
          </li>
        </ul>
      </div>
      <div ref={header}>
        <Header />
      </div>
      <div ref={nav}>
        <Nav />
      </div>
      <div ref={home}>
        <Home />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={experience}>
        <Experience />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
      <div ref={footer}>
        <Footer />
      </div>
    </div>
    );
}

export default App;
