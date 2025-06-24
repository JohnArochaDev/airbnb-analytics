import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";

export const StyledListItemButton = styled(ListItemButton)(() => ({
  borderRadius: 12,
  transition: "background 0.2s",
  color: '#D3D3D3',
  "&:hover": {
    backgroundColor: "#374151",
  },
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: "rgb(0 104 139)",
  },
}));
