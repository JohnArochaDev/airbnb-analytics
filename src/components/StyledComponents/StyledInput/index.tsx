import { FC } from "react";
import { TextField, TextFieldProps } from "@mui/material";

export const StyledInput: FC<TextFieldProps> = (props) => (
  <TextField
    {...props}
    sx={{
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#374151",
        color: "#fff",
        "& fieldset": {
          borderColor: "#D3D3D3",
        },
        "&:hover fieldset": {
          borderColor: "#D3D3D3",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#D3D3D3",
        },
      },
      "& .MuiInputLabel-root": {
        color: "#D3D3D3",
        px: 0.5,
      },
      ...props.sx,
    }}
    InputProps={{
      sx: {
        px: 0.5,
        ...(props.InputProps?.sx || {}),
      },
      ...props.InputProps,
    }}
  />
);
