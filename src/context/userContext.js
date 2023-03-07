import { createContext, useContext, useEffect, useReducer } from "react";
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
    const { data : updatedUser, fetchData} = useFetch() 
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))

        if(user){
            fetch('/chatAPI/user/getUser/' + user._doc._id).then(response => {return response.json()}).then(updatedUser => {dispatch({type: userActions.LOGIN, payload :updatedUser })})
        }
    },[])

    return(
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
} 