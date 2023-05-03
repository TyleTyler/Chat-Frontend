import { createContext, useState, useEffect, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";

export const UserContext = createContext()

export const userActions = { LOGIN : "login", LOGOUT: "logout", SIGNUP: "signup"}

export const userReducer = (state, action)=>{
    switch(action.type){
        case(userActions.LOGIN):
            return { user: action.payload}
        case(userActions.LOGOUT):
            return { user: null}
        default :
            return state
    }
}
export const UserContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(userReducer, {
        user:null
    })
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        dispatch({type: userActions.LOGIN, payload : user._doc })
        
    },[])
    return(
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
} 