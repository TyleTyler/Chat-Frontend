import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import logo from "../public/LogoChat.png"
import userPFP from "../public/user.png"


const Navbar = () => {
const {user} = useUserContext();
import logpng from "../public/logout.png"
import cog from "../public/cog.png"
import { useLogout } from "../hooks/useLogout";
import { useState } from "react";

const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useUserContext(); 
    const [pfpPopUp, setPfpPopUp] = useState(false)

    return ( <div className="navbar">
        <img className ="logo" src={logo} />
        <nav className="navComponents">
             <Link to="/">Home</Link>
             {!user && (<Link to="/login">Log in</Link>)}
             <div>Contact</div>
             <div>About</div>
             <div>FQA</div>
             {user && (<div className="userPFP"> 
                <h1 className="username"> {user.username} </h1>
             {user && (<div className="userPFP" onClick={()=>setPfpPopUp(!pfpPopUp)}> 
                <h1 className="username"> {user._doc.username} </h1>
                {pfpPopUp && <section className="pfpPopUp"> 
                    <div className="popUptext"> Account Settings </div>
                    <hr/>
                    <div className="popUptext" id="friendcode" onClick={()=>{
                        navigator.clipboard.writeText(user._doc.friendCode)
                        alert("Copied Friend Code")
                    }}>Friend Code: {user._doc.friendCode}</div>
                    <hr/>
                    <div className="popUptext" onClick={logout}>Logout</div><img src={logpng}/>
                </section>}
                <img src={userPFP} className="pfp"/>
             </div>)}
        </nav>
    </div> );
}
 
export default Navbar;