import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";

import { drawrWidth } from "../../utils/types";
import { FilterCard } from "../../components/Dashboard/FilterCard";
import { StyledCard } from "../../components/StyledComponents/StyledCard";

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
        {/* Top Grid Section, Text and Filter */}
        <Grid
          sx={{
            xs: 12,
            sm: 12,
            md: 12,
          }}
        >
          <Typography
            variant="h5"
            noWrap
            sx={{
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 800,
              letterSpacing: ".1rem",
              color: "#D3D3D3",
              textDecoration: "none",
              height: "100%",
              alignItems: "center",
            }}
          >
            Property Search
          </Typography>
        </Grid>
        <Grid
          sx={{
            xs: 12,
            sm: 12,
            md: 12,
          }}
        >
          <Typography
            variant="body1"
            noWrap
            sx={{
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: "#D3D3D3",
              textDecoration: "none",
              height: "100%",
              alignItems: "center",
            }}
          >
            Discover profitable properties for sale or rent
          </Typography>
        </Grid>
        <Grid
          sx={{
            xs: 12,
            sm: 12,
            md: 12,
            mt: 2.5,
            ml: 2,
            mr: 2,
          }}
        >
          <FilterCard />
        </Grid>
        {/* Middle grid section, Map and Selected */}
        <Grid
          container
          sx={{
            xs: 12,
            mt: 2.5,
            ml: 2,
            mr: 2,
            flexWrap: "nowrap",
            flex: 1,
          }}
        >
          <Grid
            sx={{
              flexBasis: "65%",
              pr: 1,
              minHeight: "45vh",
            }}
          >
            <StyledCard />
          </Grid>
          <Grid
            sx={{
              flexBasis: "35%",
              pl: 1,
              minHeight: "45vh",
            }}
          >
            <StyledCard />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
