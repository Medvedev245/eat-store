import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const CustomizedRating = ({ recipe }) => {
  console.log(recipe.rating);
  return (
    <Box sx={{ "& > legend": { mt: 1 } }}>
      {/* <Typography component="legend">Custom icon and color</Typography> */}
      <StyledRating
        // name="disabled"
        readOnly
        size="small"
        defaultValue={recipe.rating}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={0.1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      {/* <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} /> */}
    </Box>
  );
};
export default CustomizedRating;
