import Logo from "../../../assets/images/K-logos_transparent.png";
import {Link} from 'react-router-dom';
import './index.scss';


const Home = () => {
    return (
        <div className ="container home-page">
            <div className ="text-zone">
                <h1>Hi, <br/> I'm 
          
                <br/>
                Kailee
                <br/>
                <img src={Logo}></img><br/>
                Web Developer</h1>
                <h2>Full-Stack Developer / Junior Systems Administrator</h2>
                <Link to="/contact" className="flat-button">Contact Me!</Link>
        </div>
        </div>
    )
}

export default Home