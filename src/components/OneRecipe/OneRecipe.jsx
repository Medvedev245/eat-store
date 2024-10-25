import React from "react";
import { ImgRecipe, OneItem } from "./OneRecipe.styled";

const OneRecipe = ({ recipe }) => {
  //   console.log(recipe);
  return (
    <OneItem to={`products/${recipe.id}`}>
      <ImgRecipe src={recipe.image} alt="" />
      <span>name</span>
      <p>shrehe5 e5tgw45yw 5etw54w54g we5gw4egw4g eg54g</p>
      <div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div>
          {/* <svg />
          <span>??? min</span> */}
        </div>
      </div>
    </OneItem>
  );
};

export default OneRecipe;
