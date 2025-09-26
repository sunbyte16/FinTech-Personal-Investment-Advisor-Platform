import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function Copyright(props) {
  

    return (
      <Typography variant="body2" color="text.primary" align="center" {...props}>
        <Link color="inherit" sx={{textDecoration:"none"}} href="https://github.com/SUNIL12502/Team-Eagles">
          Made with Lot of Love by Sunil, Nitin, Prarnav & Prabhas
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }