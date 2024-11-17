import React from "react";

import {
  ButtonLink,
  RecipeWrap,
  SectionNewRecepies,
  TextWrap,
} from "./NewRecepies.styled";
import { useSelector } from "react-redux";
import OneRecipe from "../OneRecipe/OneRecipe";
import LoaderComponent from "../Loader/Loader";

const NewRecepies = () => {
  const products = useSelector((state) => state.products.list);

  function mostFamous(products) {
    if (!products || !products.recipes) return [];
    return products.recipes.filter((item) => item.rating === 4.9);
  }

  const popularRecipes = mostFamous(products).slice(0, 4);

  console.log(popularRecipes);
  return (
    <SectionNewRecepies>
      {products.length === 0 ? (
        <LoaderComponent loading={true} />
      ) : (
        <>
          <TextWrap>Naše nejoblíbenější recepty</TextWrap>
          <RecipeWrap>
            {popularRecipes.map((recipe) => (
              <OneRecipe key={recipe.id} recipe={recipe} />
            ))}
          </RecipeWrap>
          <ButtonLink to="/allReecipies">Zobrazit více</ButtonLink>
        </>
      )}
    </SectionNewRecepies>
  );
};

export default NewRecepies;
