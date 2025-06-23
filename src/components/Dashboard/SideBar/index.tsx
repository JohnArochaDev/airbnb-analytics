import { FC } from "react";

import { ListOptions } from "../../../utils/types";

import { styled } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

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

	const drawrWidth = 300;
  const pages: ListOptions[] = [
    { text: "Dashboard", icon: <TimelineRoundedIcon /> },
    { text: "Property Statistics", icon: <MapsHomeWorkRoundedIcon /> },
    { text: "CRM Management", icon: <GroupsRoundedIcon /> },
    { text: "Property Search", icon: <LocationOnRoundedIcon /> },
    { text: "Profile Settings", icon: <SettingsRoundedIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "#1F2937",
          top: "5rem", // Offset equal to Navbar height
          height: "calc(100% - 5rem)",
          width: drawrWidth,
          minWidth: drawrWidth,
          maxWidth: drawrWidth,
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
        <Stack>
          <List>
            {pages.map((item) => (
              <ListItem>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#D5C9BE" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: "#D5C9BE" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Box>
    </Drawer>
  );
};
