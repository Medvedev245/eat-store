import React from "react";
import {
  Img,
  MainTitle,
  Overlay,
  SectionCategory,
} from "./CategoryBlock.styled";
import BgImage from "../../Files/img/volga.jpg";

const CategoryBlock = () => {
  return (
    <SectionCategory>
      <Img src={BgImage} alt="Food" />
      <Overlay />
      <MainTitle>What are you cooking today?</MainTitle>
    </SectionCategory>
  );
};

export default CategoryBlock;
