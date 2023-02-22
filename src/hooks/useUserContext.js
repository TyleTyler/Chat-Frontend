import { UserContext } from "../context/userContext";
import { useContext } from "react";

export const useUserContext = ()=>{
    const context = useContext(UserContext)
    console.log(context)
    return context
    if(!context){
        throw Error("useUserContext must be used within its scope")
    }
}