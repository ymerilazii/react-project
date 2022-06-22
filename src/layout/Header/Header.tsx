import { Box } from "@mui/material";

interface Props {
   onLogOut: () => void;
}
export const Header = (props: Props) => {
   return (
      <div>
         <Box
            component="header"
            sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               padding: "0 20px",
               position: "fixed",
               width: "100%",
               zIndex: (theme) => theme.zIndex.drawer + 1,
               backgroundColor: "#fff",
               borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
               boxSizing: "border-box",
            }}
         >
            <div className="logo">
               <h2>Films Logo</h2>
            </div>
            <nav>
               <Box
                  component="ul"
                  sx={{
                     display: "flex",
                     listStyle: "none",
                     columnGap: "30px",
                  }}
               >
                  <li>My Movies</li>
                  <li>My Profile</li>
                  <li
                     onClick={props.onLogOut}
                     style={{
                        cursor: "pointer",
                     }}
                  >
                     Logout
                  </li>
               </Box>
            </nav>
         </Box>
      </div>
   );
};
