import { Box, Grid } from "@mui/material";
import { FC } from "react";

import { drawrWidth } from "../../utils/types";
import { FilterCard } from "../../components/Dashboard/FilterCard";

export const PropertySearchGrid: FC = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        flex: 1,
        height: "100%",
        ml: `${drawrWidth}px`,
        p: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "grid",
        }}
      >
        <Grid
          sx={{
            xs: 12,
            sm: 12,
            md: 12,
          }}
        >
          <FilterCard />
        </Grid>
      </Grid>
    </Box>
  );
};
