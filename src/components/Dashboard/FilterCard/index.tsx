import { useState, FC } from "react";
import { StyledCard } from "../../StyledComponents/StyledCard";
import { StyledInput } from "../../StyledComponents/StyledInput";
import { MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import { StyledSelect } from "../../StyledComponents/StyledSelect";
import { StyledButton } from "../../StyledComponents/StyledButton";

export const FilterCard: FC = () => {
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [listingType, setListingType] = useState("");

  return (
    <StyledCard sx={{ p: 3, px: 5 }}>
      <FormControl variant="outlined" fullWidth>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 2,
            justifyContent: "space-between",
            height: 48,
          }}
        >
          <Box sx={{ flex: 1, mr: 2 }}>
            <StyledInput
              placeholder="Enter city, state..."
              label="Location"
              fullWidth
              sx={{ height: 50, "& .MuiInputBase-root": { height: 50 } }}
            />
          </Box>
          <Box sx={{ flex: 1, mr: 2 }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="property-type-label" sx={{ color: "#D3D3D3" }}>
                Property Type
              </InputLabel>
              <StyledSelect
                labelId="property-type-label"
                label="Property Type"
                value={propertyType}
                onChange={(e) =>
                  setPropertyType((e.target as HTMLInputElement).value)
                }
                fullWidth
                sx={{ height: 50, "& .MuiOutlinedInput-root": { height: 50 } }}
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="house">House</MenuItem>
                <MenuItem value="townhome">Townhome</MenuItem>
                <MenuItem value="condo">Condo</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
              </StyledSelect>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1, mr: 2 }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="bedrooms-label" sx={{ color: "#D3D3D3" }}>
                Bedrooms
              </InputLabel>
              <StyledSelect
                labelId="bedrooms-label"
                label="Bedrooms"
                value={bedrooms}
                onChange={(e) =>
                  setBedrooms((e.target as HTMLInputElement).value)
                }
                fullWidth
                sx={{ height: 50, "& .MuiOutlinedInput-root": { height: 50 } }}
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4+</MenuItem>
              </StyledSelect>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1, mr: 2 }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="price-range-label" sx={{ color: "#D3D3D3" }}>
                Price Range
              </InputLabel>
              <StyledSelect
                labelId="price-range-label"
                label="Price Range"
                value={priceRange}
                onChange={(e) =>
                  setPriceRange((e.target as HTMLInputElement).value)
                }
                fullWidth
                sx={{ height: 50, "& .MuiOutlinedInput-root": { height: 50 } }}
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="0-1000">$0 - $1,000</MenuItem>
                <MenuItem value="1000-2000">$1,000 - $2,000</MenuItem>
                <MenuItem value="2000-3000">$2,000 - $3,000</MenuItem>
                <MenuItem value="3000-5000">$3,000 - $5,000</MenuItem>
                <MenuItem value="5000+">$5,000+</MenuItem>
              </StyledSelect>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1, mr: 2 }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="listing-type-label" sx={{ color: "#D3D3D3" }}>
                Listing Type
              </InputLabel>
              <StyledSelect
                labelId="listing-type-label"
                label="Listing Type"
                value={listingType}
                onChange={(e) =>
                  setListingType((e.target as HTMLInputElement).value)
                }
                fullWidth
                sx={{ height: 50, "& .MuiOutlinedInput-root": { height: 50 } }}
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="forSale">For Sale</MenuItem>
                <MenuItem value="forRent">For Rent</MenuItem>
              </StyledSelect>
            </FormControl>
          </Box>
          <Box
            sx={{
              flex: 0.7,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <StyledButton
              variant="contained"
              sx={{ height: 50, width: "100%", px: 4, backgroundColor: 'rgb(0 104 139)' }}
            >
              Search
            </StyledButton>
          </Box>
        </Box>
      </FormControl>
    </StyledCard>
  );
};
