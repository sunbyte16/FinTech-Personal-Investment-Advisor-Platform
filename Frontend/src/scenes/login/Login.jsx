// const Login = ()  => {
//     return <div><form >
//     <label htmlFor="">Email ID</label>
//     <input type="text" />
//     <label htmlFor="">Password</label>
//     <input type="text" />
//     <button>Sign in</button>
// </form></div>
// }

// export default Login;
// ==========================================================================================
import { useState } from "react";
import { useLogin } from '../../hooks/useLogin.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import { useNavigate, Navigate } from "react-router-dom";

// const theme = createTheme();

// const Login = ()  => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const {login, error, isLoading} = useLogin();
//     let navigate = useNavigate();

//     const handleSubmit = async (e) =>{
//         e.preventDefault()
//         // console.log(error)

//         const isLoggedIn= await login(email,password)
       
//     //     {if({!error}){
//     //         navigate("../home")
//     // }}
//     isLoggedIn?navigate('../home'):navigate('../login')
//     }
//     return (
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//                 <TextField
//                     margin="normal"
//                     required
//                     // fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     value = {email}
//                     onChange={(e) =>{setEmail(e.target.value)}}
//                     autoComplete="email"
//                     // ref={emailRef}
//                     autoFocus
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     // fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     onChange={(e) =>{setPassword(e.target.value)}}
//                     id="password"
//                     value = {password}
//                     // ref={passwordRef}
//                     autoComplete="current-password"
//                 />
//                 {/* <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="password-confirm"
//                     label="Confirm Password"
//                     type="password"
//                     id="password-confirm"
//                     // ref={passwordConfirmRef}
//                     autoComplete="current-password"
//                 /> */}
                
//                 <Button
//                     type="submit"
//                     disabled={isLoading}
//                     // fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2 }}
//                 >
//                     Log In
//                 </Button>
//                 {error && <><div className="error">{error}</div><Navigate to="/login" replace={true} /></>}
//                 {/* {!error && <Navigate to="/home" replace={true}/>} */}
//                 {/* {login && (<Navigate to="/login" replace={true} />)} */}
//             </Box>
//             {/* <form className="login" onSubmit={handleSubmit}>
//                 <h3>Log In</h3>

//                 <label>Email:</label>
//                 <input 
//                     type="email"
//                     onChange={(e) =>{setEmail(e.target.value)}}
//                     value = {email}
//                 />

//                 <label>Password:</label>
//                 <input 
//                     type="password"
//                     onChange={(e) =>{setPassword(e.target.value)}}
//                     value = {password}
//                 />

//                 <button disabled={isLoading}>Log in</button>
//                 {error && <div className="error">{error}</div>}
//             </form> */}
//         </ThemeProvider>
//     )
// }
// ==============================================================================================
// =========================2nd================================================================
import { Box, Typography, useTheme } from "@mui/material";
import { flexbox } from "@mui/system";
import './login.scss';
import { tokens } from "../../theme.js";
import Alert from '@mui/material/Alert';

const Login = () => {
  const theme = useTheme();
  const colors = tokens("dark");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();
    const [redirect, setRedirect] = useState();
    let navigate = useNavigate();

    const redirectHandler = async(e) =>{
      // setRedirect(true)
      navigate('/login')
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        // console.log(error)

        const isLoggedIn= await login(email,password)
       
    isLoggedIn ?navigate('/home'):navigate('/login')
    }
  return (
    <Box sx={{display:flexbox, backgroundColor:colors.blueAccent[400]}}>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 7%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
            Stock Portfolio Manager
        </Typography>
      </Box>
    
      <Box m="2rem" className="backImage" display="inline-flex">
        <img src="http://www.jonesday.com/-/media/images/news/2021/07/spoofing_and_disruptive_trading_social.jpg" width="800" height="569" alt="ios" loading="lazy"/> 
         <div class="Login">
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
        </div>
        
        <Box
            width={"40%"}
            position="absolute"
            p="2rem"
            ml="55rem"
            mt="8rem"
            pb="10rem"
            borderRadius="1.5rem"
            // backgroundColor={theme.palette.background.alt}
        >
        
        <Box component="form"  width="62%" noValidate justifyContent="space-between" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                 <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value = {email}
                    onChange={(e) =>{setEmail(e.target.value)}}
                    autoComplete="email"
                    // ref={emailRef}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    onChange={(e) =>{setPassword(e.target.value)}}
                    id="password"
                    value = {password}
                    // ref={passwordRef}
                    autoComplete="current-password"
                />

                
                <Button
                    type="submit"
                    disabled={isLoading}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Log In
                </Button>
                {/* {error && <><div className="error">{error}</div><Navigate to="/login" replace={true} /></>} */}
                {error && <><Alert severity="error">{error}</Alert><Navigate to="/login" replace={true} /></>}
                {/* {!error && <Navigate to="/home" replace={true}/>} */}
                {/* {login && (<Navigate to="/login" replace={true} />)} */}
                <a href="/register" onClick={redirectHandler} variant="body2">
                    {"Don't have an account? Sign In"}
                    {/* {setRedirect(true)} */}
                </a>
            </Box>

      </Box>
      </Box>
      
    </Box>
  );
};

// ================================end 2nd====================================================================

// import React from 'react'
// import { Link } from 'react-router-dom'

// // import ImageLight from '../assets/img/login-office.jpeg'
// // import ImageDark from '../assets/img/login-office-dark.jpeg'
// // import { GithubIcon, TwitterIcon } from '../icons'
// import { Label, Input, Button } from '@windmill/react-ui'

// function Login() {
//   return (
//     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
//       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
//         <div className="flex flex-col overflow-y-auto md:flex-row">
//           <div className="h-32 md:h-auto md:w-1/2">
//             <img
//               aria-hidden="true"
//               className="object-cover w-full h-full dark:hidden"
//               src="https://raw.githubusercontent.com/estevanmaito/windmill-dashboard-react/master/src/assets/img/login-office.jpeg"
//               alt="Office"
//             />
//             <img
//               aria-hidden="true"
//               className="hidden object-cover w-full h-full dark:block"
//               src="https://raw.githubusercontent.com/estevanmaito/windmill-dashboard-react/master/src/assets/img/login-office-dark.jpeg"
//               alt="Office"
//             />
//           </div>
//           <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
//             <div className="w-full">
//               <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
//               <Label>
//                 <span>Email</span>
//                 <Input className="mt-1" type="email" placeholder="john@doe.com" />
//               </Label>

//               <Label className="mt-4">
//                 <span>Password</span>
//                 <Input className="mt-1" type="password" placeholder="***************" />
//               </Label>

//               <Button className="mt-4" block tag={Link} to="/app">
//                 Log in
//               </Button>

//               <hr className="my-8" />

//               {/* <Button block layout="outline">
//                 <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
//                 Github
//               </Button>
//               <Button className="mt-4" block layout="outline">
//                 <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
//                 Twitter
//               </Button> */}

//               <p className="mt-4">
//                 <Link
//                   className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
//                   to="/forgot-password"
//                 >
//                   Forgot your password?
//                 </Link>
//               </p>
//               <p className="mt-1">
//                 <Link
//                   className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
//                   to="/create-account"
//                 >
//                   Create account
//                 </Link>
//               </p>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Login;