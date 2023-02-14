import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLog";

const LoginPage = () => {
    const redirect = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, loading, error} = useLogin()
    const handleSubmit = async (eventObj)=>{
        eventObj.preventDefault()
        await login(email, password)
    }
    return (  <form className="signupPage" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input"> 
            <span> Email</span>
            <input type="email" className="inputHeader" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
        </div>
        <div className="input"> 
            <span > Password</span>
            <input type='password' className="inputHeader" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
        </div>
        <div className="rememberMe">  <input type="checkbox"/> Remember Me</div>
        <button> Login </button> 
        <h3> Not a User yet? <div className="redirect" onClick={(e)=>{
            redirect('/signup')
        }}> Sign up here </div></h3>
    </form>);
}
 
export default LoginPage;