import './App.css';
import { useRef } from 'react';
// import NavBar from './components/NavBar/NavBar.js';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js';

function App() {

  const home = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);

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
        <ul>
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
    </div>
    );
      {/* <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/experience' component={Experience} />
          <Route path='/about' component={About} />
        </Switch>
      </Router> */}
}

export default App;
