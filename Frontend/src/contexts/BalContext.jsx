// import { createContext, useReducer, useEffect } from 'react';

// export const BalContext = createContext()

// export const balReducer =(state,action) =>{
//     switch(action.type){
//         case 'SETBALANCE':
//             return { balance: action.payload}
//         default:
//             return state        
//     }
// } 

// export const BalContextProvider = ({ children })=>{
//     const User1  = JSON.parse(localStorage.getItem("user"));
//     const [state, dispatch] = useReducer (balReducer,{
//         balance: User1.balance
//     })
//     console.log('Balance state: ',state)

//     // useEffect(()=>{
//     //     const user = JSON.parse(localStorage.getItem('user'));

//     //     if(user){
//     //         dispatch({ type:'SETBALANCE', payload:user })
//     //     }
//     // },[])
//     useEffect(()=>{
//         const getUser  = JSON.parse(localStorage.getItem("user"));
//         const url = "http://localhost:8080/user/".concat(getUser.id);
//         console.log(url);
//         fetch(url)
//         .then((res)=>{res.json()})
//         .then((data)=>{dispatch({type:'SETBALANCE', payload:data.balance})})
//         console.log()
//         // const response = await fetch (url, {
//         //     method: 'GET',
//         //     headers:{'Content-Type':'application/json'},
//         // })
//         // const user = response.json()

//         // if(response.ok){
//         //     // // save the user to local browser storage
//         //     // localStorage.setItem('user',JSON.stringify(json))

//         //     // // Update the auth context
//         //     // dispatch({type:'LOGIN', payload: json});
//         //     // setIsLoading(false);
//         //     dispatch({ type:'SETBALANCE', payload:user.balance })
//         // }
//     },[])

//     return (
//         <BalContext.Provider value={{...state,dispatch}}>
//             {children}
//         </BalContext.Provider>
//     )
// }