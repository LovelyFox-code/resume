import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Timer from "./components/Timer";
import { FaInstagram, FaLinkedinIn, FaGithub, FaFacebook } from 'react-icons/fa';


function App() {
 
  return (
    <Router>
       <div className="App">
         <NavBar/>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/skills" component={Skills} />
           <Route exact path="/works" component={Works} />
           <Route exact path="/contact" component={Contact} />
         </Switch>
         <Timer />
         <div className="footer">
         <a href ="https://www.linkedin.com/in/alina-dakhno/">
                <FaLinkedinIn />         
         </a>  
         <a href="https://github.com/LovelyFox-code">
         <FaGithub />
         </a>
         <a href="https://www.facebook.com/DakhnoAlina">
         <FaFacebook />
         </a>
         <a href="https://www.instagram.com/alina_dakhno/">
         <FaInstagram />
         </a>
         </div>

    </div>
    </Router>
    
   
  );
}

export default App;
