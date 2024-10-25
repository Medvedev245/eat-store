import React from "react";
import { ImgRecipe, OneItem, SpanRecipe } from "./OneRecipe.styled";

const OneRecipe = ({ recipe }) => {
  //   console.log(recipe);
  return (
    <OneItem to={`products/${recipe.id}`}>
      <ImgRecipe src={recipe.image} alt="" />
      <SpanRecipe>{recipe.name}</SpanRecipe>
      <p>{recipe.instructions[0]}</p>
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
