import React from "react";
import { CssBaseline, Box } from "@mui/material";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import RoutesComponent from "../src/routers/RoutesComponent";
import { BrowserRouter as Router } from "react-router-dom";

const drawerWidth = 300;

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Menu />
        <Box component="main" className="box-main-component">
          <RoutesComponent />
        </Box>
      </Box>
    </Router>   
  );
};

export default App;
