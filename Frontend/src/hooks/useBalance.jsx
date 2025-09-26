// import { useState } from 'react';
// import { useAuthContext } from './useAuthContext.jsx';

// export const useBalance = () =>{
//     const [error, setError] = useState(null);
    
//     const user = JSON.parse(localStorage.getItem("user"));
//     const [bal, setBal] = useState(user.balance);

//     const balance = async () =>{
//         // setIsLoading(true)
//         setError(null)

//         const url = "http://localhost:8080/user/".concat(user.id);
//         console.log(url);
//         const response = await fetch (url, {
//             method: 'GET',
//             headers:{'Content-Type':'application/json'},
//         })
//         const json = await response.json()

//         if(!response.ok){
//             // setIsLoading(false)
//             setError(json.error)
//             return false;
//         }
//         if(response.ok){
//             // // save the user to local browser storage
//             // localStorage.setItem('user',JSON.stringify(json))

//             // // Update the auth context
//             // dispatch({type:'LOGIN', payload: json});
//             // setIsLoading(false);
//             console.log("Jay: "+json.balance)
//             setBal(json.balance);
//             return true;
//         }

//     }
//     return ({ balance,  error, bal });
// };

