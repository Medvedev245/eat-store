import React from "react";
import { Link } from "react-router-dom";
import { SectionNewRecepies } from "./NewRecepies.styled";
import { useSelector } from "react-redux";

const NewRecepies = () => {
  const products = useSelector((state) => state.products.list);
  console.log(products.recipes);
  return (
    <SectionNewRecepies>
      <h2>NewRecepies</h2>
      <div>photo</div>
      <Link rel="#" href="#" />
    </SectionNewRecepies>
  );
};

export default NewRecepies;
