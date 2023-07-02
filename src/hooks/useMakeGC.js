import { userActions } from "../context/userContext";
import { useUserContext } from "./useUserContext";

export const useMakeGC = ()=>{
    const makeGc = async (gcName, memberList) =>{
        try{
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
            "chatName": gcName,
            "users": memberList
            })
        
            const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
            
            const data = await fetch("/chatAPI/chat/createGC", requestOptions)
            .then(response => response.json())
            .then(result => {
                return result
            })
            return data
        }catch(e){
            return (e)
        }
    }
    return {makeGc}
}