import { useState } from 'react';
import { useAuthContext } from './useAuthContext.jsx';

export const useSignup = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (firstName, lastName, email, password) =>{
        setIsLoading(true)
        setError(null)
        

        const url = "http://localhost:8080/user/signup";
        const response = await fetch (url, {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({firstName, lastName, email, password})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
            return false;
        }
        if(response.ok){
            // save the user to local browser storage
            localStorage.setItem('user',JSON.stringify(json))

            // Update the auth context
            dispatch({type:'LOGIN', payload: json});
            setIsLoading(false);
            return true;
        }
    }
    return ({ signup,  error, isLoading });
};

