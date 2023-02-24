import { useState } from "react";
import { useUserContext } from "./useUserContext";
import { userActions } from "../context/userContext";

export const useSignup = ()=>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const {dispatch} = useUserContext()
    const signup = async (email, password, username)=>{
        setLoading(true)
        setError(null)
        const response = await fetch("/chatAPI/user/signup", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({username, email, password})
        })

        const json = await response.json()

        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //Saving user to the local storage
            localStorage.setItem('user' ,JSON.stringify(json))

            //Updating UserAuth
            dispatch({type: userActions.LOGIN, payload: json})
            
            setLoading(false)
        }

    }
    return {signup, loading, error}
}