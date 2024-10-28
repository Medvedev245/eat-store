import React from "react";
import {
  ImgRecipe,
  OneItem,
  RaithWrap,
  SpanRecipe,
  TextRecipe,
  Wrap,
} from "./OneRecipe.styled";
import CustomizedRating from "../Raithing/Raithing";

const OneRecipe = ({ recipe }) => {
  //   console.log(recipe);
  return (
    <OneItem to={`products/${recipe.id}`}>
      <ImgRecipe src={recipe.image} alt="image" />
      <Wrap>
        <SpanRecipe>{recipe.name}</SpanRecipe>
        <TextRecipe>{recipe.instructions[0]}</TextRecipe>
        <RaithWrap>
          <div>
            <CustomizedRating recipe={recipe} />
          </div>
          <div>
            {/* <svg />
                <span>??? min</span> */}
          </div>
        </RaithWrap>
      </Wrap>
    </OneItem>
  );
};

export default OneRecipe;
