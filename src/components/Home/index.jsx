
import { Link } from 'react-router-dom';
import './style.css'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I'm Alina</p>
                    <p>Frontend developer</p>
                </h1>
                <Link to="/about">
                    <button>More info</button>
                </Link>
            </div>
            <div className="person">
                <img
                    src={`${process.env.PUBLIC_URL}/ava1.jpg`}
                    alt="person picture"
                />
            </div>
        </div>

    )
}
export default Home;