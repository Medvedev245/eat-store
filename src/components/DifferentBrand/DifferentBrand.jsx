import React from "react";
import { DifferentSection, List, Title } from "./DifferentBrand.styled";
import car from "../../Files/icons/car.png";
import Check from "../../Files/icons/Check.png";
import Vallet from "../../Files/icons/Vallet.png";
import Flower from "../../Files/icons/Flower.png";

const DifferentBrand = () => {
  return (
    <DifferentSection>
      <Title>What makes our brand different</Title>

      <List>
        <li>
          <img src={car} alt="" />
          <span></span>
          <p></p>
        </li>
        <li>
          <img src={Check} alt="" />
          <span></span>
          <p></p>
        </li>
        <li>
          <img src={Vallet} alt="" />
          <span></span>
          <p></p>
        </li>
        <li>
          <img src={Flower} alt="" />
          <span></span>
          <p></p>
        </li>
      </List>
    </DifferentSection>
  );
};

export default DifferentBrand;
