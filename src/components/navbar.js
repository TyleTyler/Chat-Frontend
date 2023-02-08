import logo from "../public/LogoChat.png"


const Navbar = () => {
    return ( <div className="navbar">
        <img className ="logo" src={logo} />
        <nav className="navComponents">
             <div>Home</div>
             <div>Log in</div>
             <div>Contact</div>
             <div>About</div>
             <div>FQA</div>
        </nav>
    </div> );
}
 
export default Navbar;