import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const redirect = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (eventObj)=>{
        eventObj.preventDefault()
        console.log(email, password, username)
    }
    return (  <form className="signupPage" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input"> 
            <span> Email</span>
            <input type="email" className="inputHeader" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
        </div>
        <div className="input"> 
            <span> Username</span>
            <input className="inputHeader" value={username} onChange={(e)=>{
                setUsername(e.target.value)
            }}/>
        </div>
        <div className="input"> 
            <span > Password</span>
            <input type='password' className="inputHeader" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
        </div>
        <div className="rememberMe">  <input type="checkbox"/> Remember Me</div>
        <button> Sign Up</button> 
        <h3> Already a User? <div className="redirect" onClick={(e)=>{
            redirect('/login')
        }}> Log In here </div></h3>
    </form>);
}
 
export default SignUpPage;