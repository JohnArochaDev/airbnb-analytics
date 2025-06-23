import { FC } from "react";
import { StyledCard } from "../../StyledComponents/StyledCard";
import { StyledInput } from "../../StyledComponents/StyledInput";

export const FilterCard: FC = () => {
  return (
    <StyledCard sx={{ p: 3 }}>
      <StyledInput placeholder="Enter city, state..." label="Location" />
    </StyledCard>
  );
};
