import { useState, useEffect} from "react"
import './style.css';
import { Link } from "react-router-dom"
const NavBar = () => {
  const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        if(width > 800){
            setOpen(true);
        }
    };
    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => {
           window.removeEventListener("resize", trackScreenWidth)
        }
    }, [])
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src="" alt="logo" />
                    </Link>
                </div>
                
                <div className="list-wrapper">
                <img src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true" 
                alt="menu bars" 
                style={{opacity: !open ? 1 : 0 }}
                    onClick={() =>{
                        setOpen(!open);
                    }}/>
                    <img  src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true" 
                    alt="menu cross" 
                    style={{opacity: open ? 1 : 0 }}
                    onClick={() =>{
                        setOpen(!open);
                    }}/>

                    <ul style={{ left: open ? "0" : "-100vw"}}> 
                        
                        <li>
                            <a href="#home">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#works">
                                Work
                            </a>
                        </li>
                        <li>
                        <a href="#contact" > Contact </a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default NavBar
