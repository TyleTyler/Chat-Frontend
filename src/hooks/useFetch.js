import {useState, useEffect} from 'react';
    let useFetch = (url) =>{
        const [error, setError] = useState(null)
        const [data, setData] = useState(null)
        const [isPending, setPending] = useState(true)
        
        useEffect(()=>{
            fetch((process.env.REACT_APP_BASE_URL != null ? process.env.REACT_APP_BASE_URL + url : url)).then(res =>{
                if(!res.ok){
                    throw Error('Could not get data')
                }
                return res.json()
            }).then(data =>{
                setData(data)
                setPending(false)
                setError(null)
            }).catch(e=>{
                setPending(false)
                setError(e.message)
            })
        }, [url])
        return { data, isPending, error}
    }
export default useFetch;