import { userActions } from "../context/userContext";
import { useUserContext } from "./useUserContext";

export const useAddFriend = ()=>{
    const addFriend = async (userID, friendID, action)=>{
        return await fetch(`/chatAPI/user/${action}Req/${userID}/${friendID}`)
        .then(res =>{
            return res.json()
        }).then(data=>{
            return data
        })
    }
    return {addFriend}
}