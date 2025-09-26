import { useState } from 'react';

export const useTransaction = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const transaction = async (user,value) =>{
        setIsLoading(true)
        setError(null)
        

        const url = `http://localhost:8080/trade/${user.id}`;
        const response = await fetch (url, {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(value)
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.Error)
            return false;
        }
        if(response.ok){
            // save the user to local browser storage
            // Update the auth context
            setIsLoading(false);
            return true;
        }

    }
    return ({ transaction,  error, isLoading });
};