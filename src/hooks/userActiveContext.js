import { ActiveContext } from "../context/activeContext";
import { useContext } from "react";

export const useActiveContext = ()=>{
    const context = useContext(ActiveContext)
    if(!context){
        throw Error("useActiveContext must be used within its scope")
    }
    return context
}