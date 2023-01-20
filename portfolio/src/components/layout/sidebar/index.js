import './index.scss'
import {Link} from 'react-router-dom'
import Logo from "../../../assets/images/K-logos_transparent.png";
import LogoSubtitle from "../../../assets/images/picturetopeople.org-33d3a79229f45e24c55741a92c42319604169031befe7c272e.png"

const Sidebar =()=> (
<div className ='nav-bar'>
    <Link className='logo' to='/'>
        <img src={Logo}/>
        <img classNAme="sub-logo" src={LogoSubtitle}/>
    </Link>
    </div>

    )

export default Sidebar

