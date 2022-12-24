import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import About from './pages/About';

function App() {

  // const ref = useRef(null);

  // const handleClick = () => {

  // }

  return (
    <>
      {/* <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/experience' component={Experience} />
          <Route path='/about' component={About} />
        </Switch>
      </Router> */}
      <Router>
        <NavBar />
      </Router>
      <Home />
      <About />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
