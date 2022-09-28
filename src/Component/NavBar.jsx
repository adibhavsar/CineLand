import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{backgroundImage:"url('https://w0.peakpx.com/wallpaper/903/791/HD-wallpaper-bright-stars-with-background-of-black-and-purple-sky-space.jpg')"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ color: "white", letterSpacing: "0.05em", fontFamily: "fantasy", paddingRight:"1rem" }}>
            CineLand
          </Typography>
          <Box sx={{ flexgrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "White", display: "block" }}>
              <Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link>
            </Button>
            <Button sx={{ my: 2, color: "White", display: "block" }}>
            <Link style={{color:"white", textDecoration:"none"}} to="/Favorites">Favorites</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
