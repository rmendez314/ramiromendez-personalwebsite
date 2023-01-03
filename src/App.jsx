import './App.css';
// import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
// import ScrollToTop from './components/scrollToTop/ScrollToTop.js';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
// import NavBar from './components/NavBar/NavBar.jsx';

function App() {

  return (
      <div className="App">
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    );
}

export default App;
