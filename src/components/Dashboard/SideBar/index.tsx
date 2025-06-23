import { FC } from "react";

import { usePage } from "../../../context/PageContext";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import { StyledListItemButton } from "../../StyledComponents/StyledListItemButton";
import { StyledDrawer } from "../../StyledComponents/StyledDrawer";
import { ListOptions, PageTypes } from "../../../utils/types";

export const SideBar: FC = () => {
  const { currentPage, setCurrentPage } = usePage();

  const pages: ListOptions[] = [
    { text: PageTypes.Dashboard, icon: <TimelineRoundedIcon /> },
    { text: PageTypes.PropertyStatistics, icon: <MapsHomeWorkRoundedIcon /> },
    { text: PageTypes.CRMManagement, icon: <GroupsRoundedIcon /> },
    { text: PageTypes.PropertySearch, icon: <LocationOnRoundedIcon /> },
    { text: PageTypes.ProfileSettings, icon: <SettingsRoundedIcon /> },
  ];

  return (
    <StyledDrawer variant="permanent">
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
              <ListItem key={item.text}>
                <StyledListItemButton
                  selected={currentPage === item.text}
                  onClick={() => setCurrentPage(item.text)}
                >
                  <ListItemIcon sx={{ color: "#D5C9BE" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      color: "#D5C9BE",
                      "& .MuiListItemText-primary": {
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        letterSpacing: "0.02em",
                        marginLeft: -2,
                      },
                    }}
                  />
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Box>
    </StyledDrawer>
  );
};
