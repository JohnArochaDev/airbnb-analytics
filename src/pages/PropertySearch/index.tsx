import { Box, Grid } from "@mui/material";
import { FC } from "react";

import { drawrWidth } from "../../utils/types";

export const PropertySearchGrid: FC = () => {
  return (
    <Box
      sx={{
        border: "5px solid #fff",
        boxSizing: "border-box",
        flex: 1,
        height: "100%",
        ml: `${drawrWidth}px`,
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid
          sx={{
            xs: 12,
            sm: 12,
            md: 12,
          }}
        >
          <Box sx={{ background: "#222", height: 120, borderRadius: 2 }} />
        </Grid>
      </Grid>
    </Box>
  );
};
