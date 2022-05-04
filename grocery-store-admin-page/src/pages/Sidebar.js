import { Box, List, ListItem, ListItemText } from "@mui/material";
export const Sidebar = ({hand}) => {
    return(
    <Box
        role="presentation"
        onClick={() => {
            hand();
        }}
        >
        <List>
            <ListItem button key={12}>
            <ListItemText primary={'dwqdqwfqwfew'} />
            </ListItem>
            {/* {list.map((text, index) => (
            ))} */}
        </List>
        </Box> 
    )
}
