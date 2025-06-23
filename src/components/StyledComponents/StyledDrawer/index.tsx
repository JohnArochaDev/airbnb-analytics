import { styled } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";

const drawrWidth = 280;

export const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawrWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  backgroundColor: "#1F2937",
  borderRight: "1px solid #D3D3D3",
  borderTop: "1px solid #D3D3D3",
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
  [`& .${drawerClasses.paper}`]: {
    backgroundColor: "#1F2937",
    top: "5rem", // Offset equal to Navbar height
    height: "calc(100% - 5rem)",
    width: drawrWidth,
    minWidth: drawrWidth,
    maxWidth: drawrWidth,
    boxSizing: "border-box",
    borderTop: "1px solid #D3D3D3",
    borderRight: "1px solid #D3D3D3",
  },
}));
