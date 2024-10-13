import React, { useEffect } from "react";
import { SectionCategory } from "./CategoryBlock.styled";
import axios from "axios";

const CategoryBlock = () => {
  useEffect(() => {
    axios.get("https://dummyjson.com/recipes/tags").then((res) => {
      console.log(res.data);
    });
  });

  return <SectionCategory>CategoryBlock</SectionCategory>;
};

export default CategoryBlock;
