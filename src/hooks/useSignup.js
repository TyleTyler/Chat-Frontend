import { useState } from "react";
import { useUserContext } from "./useUserContext";

export const useSignup = ()=>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const singup = async (email, password)=>{
        setLoading(true)
        setError(null)
        const response = await fetch("/chatAPI/user/signup")
    }
}