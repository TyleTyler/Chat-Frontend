import {useState, useEffect} from 'react';
import { useUserContext } from './useUserContext';


export const getPossibleUsers = async (searchTerm, userID) => {-
        try{ 
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
            "searchTerm": searchTerm,
            "userID": userID
            })
        
            const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
            
            const data = await fetch("/chatAPI/user/getUsers", requestOptions)
            .then(response => response.json())
            .then(result => {
                return result
            })
            const list = Object.values(data)
            return list
        }catch(e){
            return (e)
        }
}
