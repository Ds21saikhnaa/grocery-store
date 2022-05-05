import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Sidebar = ({hand}) => {
    const navigate = useNavigate();
    const list = [
        {
          name: "Products",
          path: "products",
        },
        {
          name: "Add product",
          path: "add-product",
        },
      ];
    return(
    <Box
        role="presentation"
        onClick={() => {
            hand();
        }}
        >
            <List>
        {list.map(({ name, path }, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              navigate(path);
            }}
          >
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
        </Box> 
    )
}
