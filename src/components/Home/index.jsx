
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaGithub, FaFacebook } from 'react-icons/fa';
import './style.css'

const Home = () => {
    return (
        <div id = "home" className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I'm Alina</p>
                    <p>Frontend developer</p>
                </h1>
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
                <Link to="/about">
                    <button>More info</button>
                </Link>
            </div>
            <div className="person">
                <img
                    src={`${process.env.PUBLIC_URL}/ava.png`}
                    alt="person picture"
                />
            </div>
           
        </div>

    )
}
export default Home;