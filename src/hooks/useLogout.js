import { userActions } from "../context/userContext";
import { useUserContext } from "./useUserContext";

export const useLogout = ()=>{
    const {dispatch} = useUserContext()
    const logout = ()=>{
        //Logout of localStorage
        localStorage.removeItem("user")
    
        //Logout of auth
        dispatch({type : userActions.LOGOUT})
    }
    
    return {logout}
}