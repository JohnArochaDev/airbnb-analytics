import { FC } from "react";
import { Select, SelectProps } from "@mui/material";

export const StyledSelect: FC<SelectProps> = (props) => (
  <Select
    {...props}
    sx={{
      backgroundColor: "#374151",
      color: "#D3D3D3",
      borderRadius: 1,
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#D3D3D3",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#D3D3D3",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#D3D3D3",
      },
      // Style the label color
      "& .MuiInputLabel-root": {
        color: "#D3D3D3",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#D3D3D3",
      },
      ...props.sx,
    }}
    slotProps={{
      ...props.slotProps,
      root: {
        ...(props.slotProps?.root || {}),
        sx: {
          px: 0.5,
          ...(props.slotProps?.root?.sx || {}),
        },
      },
    }}
  />
);