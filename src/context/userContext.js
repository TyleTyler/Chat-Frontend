import { createContext, useContext, useEffect, useReducer } from "react";

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

        if(user){
            dispatch({type: userActions.LOGIN, payload : user})
        }
    },[])

    return(
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
} 