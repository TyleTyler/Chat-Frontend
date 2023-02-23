import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import logo from "../public/LogoChat.png"
import userPFP from "../public/user.png"


const Navbar = () => {
    const {user} = useUserContext(); 
    console.log(user)
    return ( <div className="navbar">
        <img className ="logo" src={logo} />
        <nav className="navComponents">
             <Link to="/">Home</Link>
             {!user && (<Link to="/login">Log in</Link>)}
             <div>Contact</div>
             <div>About</div>
             <div>FQA</div>
             {user && (<div className="userPFP"> 
                <h1 className="username"> {user._doc.username} </h1>
                <img src={userPFP} className="pfp"/>
             </div>)}
        </nav>
    </div> );
}
 
export default Navbar;