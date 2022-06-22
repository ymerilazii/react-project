import {
   Box,
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   Toolbar,
} from "@mui/material";

export const Sidebar = () => {
   return (
      <Drawer
         variant="permanent"
         anchor="left"
         sx={{
            width: 250,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 250, top: "auto" },
         }}
      >
         <Toolbar />
         <List sx={{
            marginTop: "10px",
         }}>
            {["Item 1", "Item 2", "Item 3", "Item 4"].map((text) => (
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                     <ListItemText primary={text} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Drawer>
   );
};
