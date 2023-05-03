import { useState } from "react";
import { useUserContext } from "./useUserContext";
import { userActions } from "../context/userContext";

export const useLogin = ()=>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const {dispatch} = useUserContext()
    const login = async (email, password)=>{
        setLoading(true)
        setError(null)
        //  (process.env.REACT_APP_BASE_URL + "is the url")
        const response = await fetch("/chatAPI/user/login", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({email, password})
        })
        let user = await response.json()
        const userChats = await fetch("/chatAPI/chat/getChats", {
            method: "POST",
            headers : { 'Content-Type' : 'application/json'},
            body: JSON.stringify({"userID" : user._doc._id})
        }).then((res)=>{ return res.json()})
        user = {...user._doc, chats: userChats}

        if(!response.ok){
            setLoading(false)
            setError(user.error)
        }
        if(response.ok){
            //Saving user to the local storage
            localStorage.setItem('user' ,JSON.stringify(user))

            //Updating UserAuth
            dispatch({type: userActions.LOGIN, payload: user})
            
            setLoading(false)
        }

    }
    return {login, loading, error}
}