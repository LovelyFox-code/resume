import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";




function App() {
 
  return (
    <Router>
       <div className="App">
         <NavBar/>
         < Home />
         < Skills />
         < Works />
         < About />
         
         < Contact />
    </div>
    </Router>
    
   
  );
}

export default App;
