import './App.css';
// import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import About from './components/about/About';
// import ScrollToTop from './components/scrollToTop/ScrollToTop.js';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';



function App() {

  return (
      <div className="App">
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    );
}

export default App;
