import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
    const redirect = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, loading, error} = useLogin()
    const [remember, setRemember] = useState(false)
    const handleSubmit = async (eventObj)=>{
        redirect('/')
        await login(email, password, remember)
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
        <div className="rememberMe">  <input type="checkbox" onClick={()=>{setRemember(!remember)
        console.log(remember)}}/> Remember Me</div>
        <button> Login </button> 
        <h3> Not a User yet? <div className="redirect" onClick={(e)=>{
            redirect('/signup')
        }}> Sign up here </div></h3>
        { error && <div className="error"> {error} </div>}
    </form>);
}
 
export default LoginPage;