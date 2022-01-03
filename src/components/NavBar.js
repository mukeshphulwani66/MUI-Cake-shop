import React from 'react'
import { AppBar, Typography, Button, Toolbar } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


const NavBar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" flexGrow={1}>
               Blissfull Bytes
             </Typography>
            <Button varaint="text" color="inherit" startIcon={<LoginIcon />}>
                Login
            </Button>    
            <Button varaint="text" color="inherit" endIcon={<LogoutIcon />}>
                Logout
            </Button>    
            </Toolbar>
         
        </AppBar>
    )
}

export default NavBar
