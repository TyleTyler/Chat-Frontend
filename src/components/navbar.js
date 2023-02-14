import { Link } from "react-router-dom";
import logo from "../public/LogoChat.png"


const Navbar = () => {
    return ( <div className="navbar">
        <img className ="logo" src={logo} />
        <nav className="navComponents">
             <Link to="/">Home</Link>
             <Link to="/login">Log in</Link>
             <div>Contact</div>
             <div>About</div>
             <div>FQA</div>
        </nav>
    </div> );
}
 
export default Navbar;