import React from "react";
import {
  ImgRecipe,
  ImgTytle,
  OneItem,
  RaithWrap,
  SpanRecipe,
  TextRecipe,
  Wrap,
  RaithSpan,
  WrapDescr,
  WrapElements,
  SpanTime,
} from "./OneRecipe.styled";
import CustomizedRating from "../Raithing/Raithing";
import IconFood from "../../Files/icons/MyIcone.png";
import Clock from "../../Files/icons/Clock.png";

const OneRecipe = ({ recipe }) => {
  console.log(recipe);
  return (
    // <div></div>
    <OneItem to={`products/${recipe.id}`}>
      <ImgRecipe src={recipe.image} alt="image" />
      <Wrap>
        <SpanRecipe>{recipe.name}</SpanRecipe>
        <TextRecipe>{recipe.instructions[0]}</TextRecipe>
        <RaithWrap>
          <RaithSpan>
            <CustomizedRating recipe={recipe} />
            <span>{recipe.rating} / 5</span>
          </RaithSpan>
          <WrapDescr>
            <WrapElements>
              <ImgTytle src={IconFood} alt="IconFood" />
              <SpanTime>{recipe.mealType[0]}</SpanTime>
            </WrapElements>
            <WrapElements>
              <ImgTytle src={Clock} alt="Clock" />
              <SpanTime>{recipe.cookTimeMinutes} min</SpanTime>
            </WrapElements>
          </WrapDescr>
        </RaithWrap>
      </Wrap>
    </OneItem>
  );
};

export default OneRecipe;
