import * as React from 'react';
import './LandingPage.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid'; // Grid version 1
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { height } from '@mui/system';
import Copyright from './Copyright';

/// import { width } from '@mui/system';
// import { useHistory } from "react-router-dom";
// const history = useHistory();
// function loginHandler (){
    

// //   function handleClick() {
//     // history.push("/home");
// }


export default function ButtonAppBar() {

    let navigate = useNavigate();

  async function loginHandler(event) {
    event.preventDefault();
    // await submitForm(event.target);
    navigate("../login");
    // replace: true will replace the current entry in 
    // the history stack instead of adding a new one.

  }

  async function registerHandler(event) {
    event.preventDefault();
    // await submitForm(event.target);
    navigate("../register");
    // replace: true will replace the current entry in 
    // the history stack instead of adding a new one.

  }



  return (
    <Box sx={{width:"100%", flexGrow: 1,backgroundColor:"#141b2d"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              // justifyContent="center"
            >
              <EqualizerIcon/>
          </IconButton>

          <Typography width="85%" variant="h6" component="div" >
            <a href='/' style={{color: 'inherit', textDecoration: 'none'}}>Stock Portfolio Mangement</a>
          </Typography>
        
          <Typography sx={{ justifyContent:"space-between", display:"flex"}}>
            <Button color="inherit" onClick={loginHandler}>Login</Button>
            <Button color="inherit" onClick={registerHandler}>Signup</Button>
          </Typography>
          
        </Toolbar>
      </AppBar>
      
      <Typography sx={{ marginTop: "1%", paddingTop:"8%", paddingBottom:"19%",marginLeft:"10%", fontSize:70, color:"white"}} 
                      className="stocksTransform" display="flex" component="div" variant='h2'>
        <div>
          <p>Invest in
          <span>US Stocks</span> 
          <span>IPO</span> 
          <span>Future</span> 
          <span>Indian Stocks</span> 
          <span>Options</span> 
          </p> 
        </div> 
        
        <div className="Tile1">
          <a  class="" 
            target="_blank" rel="noopener noreferrer nofollow">
            <div class="lazyload-wrapper ">
              <img class="tradeImage1" src="https://media.istockphoto.com/id/943292690/photo/financial-and-technical-data-analysis-graph-showing-stock-market-trends.jpg?s=612x612&w=0&k=20&c=pPx6ScJIqxo60fAExwJRIzYNQ_Jd-l-L78yUIJEzfAY=" width="250" height="180" alt="ios" loading="lazy"/>
            </div>
          </a>
      </div>

      <div className="Tile2">
          <a  class="" 
            target="_blank" rel="noopener noreferrer nofollow">
            <div class="lazyload-wrapper ">
              <img class="tradeImage1" src="https://media.istockphoto.com/photos/close-up-image-of-a-stock-market-graph-picture-id1213574690?b=1&k=20&m=1213574690&s=612x612&w=0&h=N2lNvavpoTFOjBHIVbKd2BmFj9Q3wjqEpxT5AASB50M=" width="250" height="180" alt="ios" loading="lazy"/>
            </div>
          </a>
      </div> 
      <div className="Tile3">
          <a  class="" 
            target="_blank" rel="noopener noreferrer nofollow">
            <div class="lazyload-wrapper ">
              <img class="tradeImage1" src="https://wallpaperaccess.com/full/1393720.jpg" width="250" height="180" alt="ios" loading="lazy"/>
            </div>
          </a>
      </div> 
      <div className="Tile4">
          <a  class="" 
            target="_blank" rel="noopener noreferrer nofollow">
            <div class="lazyload-wrapper ">
              <img class="tradeImage1" src="https://the-tech-trend.com/wp-content/uploads/2021/02/How-to-read-Candlestick-Trading-Charts-A-Complete-Guide-for-Beginners.jpg" width="250" height="180" alt="ios" loading="lazy"/>
            </div>
          </a>
      </div>   
      <Typography sx={{fontSize:"large", position:"absolute",mt:"13%"}}>
          Learn trading with our virtual platform
      </Typography>
      
      <Copyright sx={{position:"absolute",mt:"35%", ml:"35%", color:"white"}}/>
          
      </Typography>
      

    </Box>
  );
}