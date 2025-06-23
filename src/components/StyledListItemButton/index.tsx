import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 12,
  transition: "background 0.2s",
  "&:hover": {
    backgroundColor: "#374151",
  },
}));

