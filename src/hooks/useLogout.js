import { userActions } from "../context/userContext";
import { useUserContext } from "./useUserContext";

export const useLogout = ()=>{
    const {dispatch} = useUserContext()
    console.log(useUserContext())
    console.log(process.env.REACT_APP_BASE_URL + "is the url")
    const logout = ()=>{
        //Logout of localStorage
        localStorage.removeItem("user")
    
        //Logout of auth
        dispatch({type : userActions.LOGOUT})
    }
    
    return {logout}
}