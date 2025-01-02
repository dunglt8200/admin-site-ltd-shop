import React from 'react';
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import DiamondIcon from '@mui/icons-material/Diamond';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <AppBar className='appbar-header' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
          <Toolbar className='toolbar-header'>
            <Box className='logo-header'>
              <DiamondIcon className='ico-logo-header'/>
              <Typography variant="h6" noWrap component="div">LTD SHOP ADMIN</Typography>
            </Box>
            <Box>
              <AccountCircleIcon />
            </Box>
          </Toolbar>
        </AppBar>
      );
}

export default Header;