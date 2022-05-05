import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { useContext } from "react";
  import { UserContext } from "../ctx";
  import MenuIcon from "@mui/icons-material/Menu";
  export const NavBar = () => {
    const {handleOpen} = useContext(UserContext);
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Grocery Store
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        {/* <Box sx={{ p: 10 }}>{children}</Box> */}
      </>
    );
  }
