import React from "react";
import { Link } from "react-router-dom";
import { RecipeWrap, SectionNewRecepies } from "./NewRecepies.styled";
import { useSelector } from "react-redux";
import OneRecipe from "../OneRecipe/OneRecipe";

const NewRecepies = () => {
  const products = useSelector((state) => state.products.list);
  //   console.log(products.recipes);
  function mostFamous(products) {
    if (!products || !products.recipes) return [];
    console.log(products);
    return products.recipes.filter((item) => item.rating === 4.9);
  }
  const popularRecipes = mostFamous(products);
  console.log(popularRecipes);
  return (
    <SectionNewRecepies>
      <h2>Our most popular recipes</h2>
      <RecipeWrap>
        {popularRecipes.map((recipe) => (
          <OneRecipe recipe={recipe} />
        ))}
      </RecipeWrap>
      <Link rel="#" href="#" />
    </SectionNewRecepies>
  );
};

export default NewRecepies;
