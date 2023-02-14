import { createContext, useContext, useReducer } from "react";

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

    console.log("AuthContext State: " , state)
    return(
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
} 