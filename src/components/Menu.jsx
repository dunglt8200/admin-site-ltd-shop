import React from "react";
import { Drawer, List, ListItem, ListItemText, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Menu = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/categories">
            <ListItemText primary="Categories" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Menu;
