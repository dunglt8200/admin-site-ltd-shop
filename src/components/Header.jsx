import React from 'react';
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <AppBar className='appbar-header'>
          <Toolbar className='toolbar-header'>        
            <Box className='box-header'>
             <Typography>Welcome !</Typography>
              <AccountCircleIcon />
            </Box>
          </Toolbar>
        </AppBar>
      );
}

export default Header;