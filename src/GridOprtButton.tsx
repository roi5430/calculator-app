// import styled from "@emotion/styled/types/base";
import styled from "@emotion/styled";

import { Button, Grid } from "@mui/material";

interface GridOprtButtonProps {
  operation: string;
  selectOprt: (operation: string) => void;
  selectedOteration: string;
}

const StyledBnt = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: props.selected ? "ffb041" : "#ff9041",
  color: "#fff",
  fontSize: "1.8rem",
  "&:hover": {
    backgroundColor: "#ffb041",
  },
  "&:active": {
    backgroundColor: "#ffb041",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
}));

export const GridOprtButton: React.FC<GridOprtButtonProps> = ({
  operation,
  selectOprt,
  selectedOteration,
}) => {
  return (
    <Grid item xs={3}>
      <StyledBnt
        fullWidth
        variant="contained"
        onClick={() => selectOprt(operation)}
        selected={selectedOteration === operation}
      >
        {operation}
      </StyledBnt>
    </Grid>
  );
};
