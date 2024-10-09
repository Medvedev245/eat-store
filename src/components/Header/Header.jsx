import React from "react";
import { ComponentHeader, SerchImg } from "./Header.styled";
import searchComponent from "../../Files/icons/search.png";
import MyIcone from "../../Files/icons/MyIcone.png";
import Buscet from "../../Files/icons/busket.png";

const Header = () => {
  return (
    <ComponentHeader>
      <div>
        <SerchImg src={searchComponent} alt="Search" />
      </div>
      <div>
        <span>Mamine</span>
        <img src={MyIcone} alt="MyFood" />
        <span>recepty</span>
      </div>
      <div>
        <img src={Buscet} alt="Buscet" />
      </div>
    </ComponentHeader>
  );
};

export default Header;
