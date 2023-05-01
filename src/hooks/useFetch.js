import {useState, useEffect} from 'react';
import { useUserContext } from './useUserContext';


export const useFetch = (url, raw = {}) => {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const {user} = useUserContext()
    const makeRequest =  (url, raw = {}) => {
        // raw = JSON.stringify(raw)
        try{ 
            const params = { headers: {'Content-Type' : "application/json"}, raw}
            console.log(params)
            fetch((process.env.REACT_APP_BASE_URL != null ? process.env.REACT_APP_BASE_URL + url : url), params)
            .then((res) => { res.json()})
            .then(data => {
                console.log(data)
                return data})
        }catch(error){
            setError(error)
            throw new Error(error)
        }
        return data.json()
    }
    useEffect(async ()=>{
        try{
            setData( await makeRequest(url, raw))
        }catch(e){
            console.log(e)
        }
    }, [])   
    return { data, isPending, error, makeRequest}
}
