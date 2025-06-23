import { FC } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const Drawer = styled(MuiDrawer)({
  width: 240,
  flexShrink: 0,
  boxSizing: "border-box",
  backgroundColor: "#1F2937",
  borderRight: "1px solid #D3D3D3",
  borderTop: "1px solid #D3D3D3",
  [`& .${drawerClasses.paper}`]: {
    width: 240,
    boxSizing: "border-box",
  },
});

export const SideBar: FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "#1F2937",
          top: "5rem", // Offset equal to Navbar height
          height: "calc(100% - 5rem)",
          borderTop: "1px solid #D3D3D3",
          borderRight: "1px solid #D3D3D3",
        },
      }}
    >
      <Divider />
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Place navigation items here when needed */}
      </Box>
    </Drawer>
  );
};
