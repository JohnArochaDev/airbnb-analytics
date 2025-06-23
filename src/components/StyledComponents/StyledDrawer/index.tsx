import { styled } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";

export const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
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
}));
