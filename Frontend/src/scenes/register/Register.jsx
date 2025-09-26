import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup.jsx'
// import { useNavigate } from "react-router-dom";

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
// const Register = ()  => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const {signup, error, isLoading} = useSignup();
//     let navigate = useNavigate();

//     const handleSubmit = async (e) =>{
//         e.preventDefault()
//         const isLoggedIn = await signup(firstName, lastName, email, password);
//         // setFirstName('');
//         // setLastName('');
//         // setEmail('');
//         // setPassword('');
//         // if(!error){
//         //     navigate("../home");
//         // }
//         // else{
//         isLoggedIn?navigate("../home"):navigate("../login")    
//         // }
        
//     }
//     return (
//         <form className="signup" onSubmit={handleSubmit}>
//             <h3>Sign Up</h3>

//             <label>First Name:</label>
//             <input 
//                 type="text"
//                 onChange={(e) =>{setFirstName(e.target.value)}}
//                 value = {firstName}
//             />

//             <label>Last Name:</label>
//             <input 
//                 type="text"
//                 onChange={(e) =>{setLastName(e.target.value)}}
//                 value = {lastName}
//             />

//             <label>Email:</label>
//             <input 
//                 type="email"
//                 onChange={(e) =>{setEmail(e.target.value)}}
//                 value = {email}
//             />

//             <label>Password:</label>
//             <input 
//                 type="password"
//                 onChange={(e) =>{setPassword(e.target.value)}}
//                 value = {password}
//             />

//             <button disabled={isLoading}>Sign Up</button>

//             {error && <div className='error'>{error}</div>}
//         </form>
//     )
// }

// export default Register;




// ================================================================================
import { Box, Typography, useTheme } from "@mui/material";
import { flexbox } from "@mui/system";
import './register.scss';
import { tokens } from "../../theme.js";
import Alert from '@mui/material/Alert';

const Register = () => {
  const theme = useTheme();
  const colors = tokens("dark");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();
    let navigate = useNavigate();

    
    const redirectHandler = async(e) =>{
      // setRedirect(true)
      navigate('/login')
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()

        const isLoggedIn = await signup(firstName, lastName, email, password);
       
        isLoggedIn?navigate('/home'):navigate("/register");
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
                Signup
            </Typography>
        </div>
        
        <Box
            width={"40%"}
            position="absolute"
            p="2rem"
            ml="55rem"
            mt="4rem"
            pb="10rem"
            borderRadius="1.5rem"
            // backgroundColor={theme.palette.background.alt}
        >
        
        <Box component="form"  width="62%" noValidate justifyContent="space-between" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    value = {firstName}
                    onChange={(e) =>{setFirstName(e.target.value)}}
                    // ref={emailRef}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value = {lastName}
                    onChange={(e) =>{setLastName(e.target.value)}}
                    autoFocus
                />
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
                {/* {error && <><div className="error">{error}</div><Navigate to="/register" replace={true} /></>} */}
                {error && <><Alert severity="error">{error}</Alert><Navigate to="/register" replace={true} /></>}
                {/* {!error && <Navigate to="/home" replace={true}/>} */}
                {/* {login && (<Navigate to="/login" replace={true} />)} */}
                <a href="/login" onClick={redirectHandler} variant="body2">
                  {"Already have an account? Log In"}
                </a>
            </Box>

      </Box>
      </Box>
      
    </Box>
  );
};

export default Register;