import {useState, useEffect} from 'react';
import { useUserContext } from './useUserContext';


export const useFetch = (url, body) => {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const {user} = useUserContext()
    useEffect(()=>{
        if(body) { 
            fetch((process.env.REACT_APP_BASE_URL != null ? process.env.REACT_APP_BASE_URL + url : url), {
            headers:{
                'Authorization': `Bearer ${user.token}`
            }, body: body
            }).then(res =>{
                console.log("fetching data")
                if(!res.ok){
                    throw Error('Could not get data')
                }
                return res.json()
            }).then(data =>{
                setData(data)
                console.log(data + " this is the data")
                setPending(false)
                setError(null)
                useUserContext.stageChanges()
                return data
            }).catch(e=>{
                setPending(false)
                setError(e.message)
            })
        }
        else{
            fetch((process.env.REACT_APP_BASE_URL != null ? process.env.REACT_APP_BASE_URL + url : url), {
                headers:{
                    'Authorization': `Bearer ${user.token}`
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
                return data
            }).catch(e=>{
                setPending(false)
                setError(e.message)
            })
        }
    }, [])   
    return { data, isPending, error}
}
