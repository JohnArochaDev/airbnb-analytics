import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";

export const StyledCard = styled(MuiCard)(() => ({
  borderRadius: 12,
  border: "1px solid #D3D3D3",
  backgroundColor: 'rgb(31 41 55)',
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
}));