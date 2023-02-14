import { useNavigate } from "react-router";


const SignUpPrompt = () => {
    let signUpRedirect = useNavigate()
    return ( <div className="SignUpPrompt">
        <h1>Create an Account</h1>
        <div className="h2Signup"> 
            <h2>Don't wait It's free!</h2> <button onClick={(e)=>{
                signUpRedirect("/signup")
            }}> Sign up</button>    
        </div>
        <div className="hourglass"><div className="top"/><div className="bottom"/></div>
    </div> );
}
 
export default SignUpPrompt;