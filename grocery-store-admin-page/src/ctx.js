import { createContext } from "react";
import { useState } from 'react';
import { NavBar, Sidebar } from "./pages"; 
import { Drawer } from "@mui/material";
export const UserContext = createContext();
export const UserContextPro = ({ children }) => {
    const [toggleDrawer, setToggleDrawer] = useState(false);
  const handleOpen = (event) => {
    setToggleDrawer(!toggleDrawer);
  };
    return (
        <UserContext.Provider value={{handleOpen}}>
            <Drawer anchor={"left"} open={toggleDrawer}>
                <Sidebar hand={handleOpen}/>
            </Drawer>
            < NavBar />
            { children }
        </UserContext.Provider>
    )
}