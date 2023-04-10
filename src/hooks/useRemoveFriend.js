import {useState, useEffect} from 'react';
import { useUserContext } from './useUserContext';

export const useRemoveFriend = () =>{
    const {stageChanges} = useUserContext()
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const {user} = useUserContext()
    const removeFriend = (userID, friendID) =>{ 
        const url = `/chatAPI/user/removeFriend/${userID}/${friendID}`
        console.log(user);
        fetch((process.env.REACT_APP_BASE_URL != null ? process.env.REACT_APP_BASE_URL + url : url), {
            method: "DELETE",
            headers:{
                "Authorization" : `Bearer ${user.token}`
            }
        }).then(res =>{
            if(!res.ok){
                throw Error('Could not get data')
            }
            return res.json()
        }).then(data =>{
            setData(data)
            setPending(false)
            setError(null)
            stageChanges()
        }).catch(e=>{
            setPending(false)
            setError(e.message)
        })
    }
    
    return { data, isPending, error, removeFriend}
}
