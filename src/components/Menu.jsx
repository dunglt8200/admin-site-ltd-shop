import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Toolbar, Box, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import HouseIcon from '@mui/icons-material/House';
import CategoryIcon from '@mui/icons-material/Category';

const drawerWidth = 240;
const constMenu = [
  {
    Name: "Trang chủ",
    Path: "",
    Ico: <HouseIcon />
  },
  {
    Name: "Danh mục sản phẩm",
    Path: "/categories",
    Ico: <CategoryIcon />
  }
]

function Menu() {

  const [menuActive, setMenuActive] = useState(null);
  const handleMenuClick = (index) => {
    setMenuActive(index);
    console.log(`Menu active: ${index}`);
  };

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
        <Box className='box-menu'>
          <List>
            { constMenu.map((menu, key) => (              
              <ListItem
              key={key}
              button
              component={Link}
              to={menu.Path}
              onClick={() => handleMenuClick(key)}
              className={`item-menu-click${menuActive === key ? '-active': ''}`}
            >
                <ListItemIcon className='ico-menu-item'>{menu.Ico}</ListItemIcon>
                <ListItemText className='text-menu-item' primary={menu.Name} />
              </ListItem>
            ))}       
          </List>
        </Box>
    </Drawer>
  );
};

export default Menu;
