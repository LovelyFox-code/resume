import "./style.css";
import { BsCodeSlash } from 'react-icons/bs';
import { RiToolsLine } from 'react-icons/ri';
import { HiOutlineLibrary} from 'react-icons/hi'
const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <  BsCodeSlash className="skill-icon"/>
                    
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                </div>
                <div>
                    < HiOutlineLibrary className="skill-icon" />
                    
                    <li>Bootstrap</li>
                    <li>Figma</li>
                    <li>React.js</li>
                </div>
                <div>
                    < RiToolsLine className="skill-icon" />
                    <li>Webpack</li>
                    <li>Chrome Dev</li>
                    <li>Git & Github</li>
                </div>
               
            </div>
        </div>
    )
}

export default Skills
