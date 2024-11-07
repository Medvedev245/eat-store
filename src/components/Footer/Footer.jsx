import React from "react";
import { ComponentFooter, WrapAdress, WrapLogo } from "./Footer.styled";
import { ImgLogo, LinkItem, TitleSpan } from "../Header/Header.styled";
import MyIcone from "../../Files/icons/MyIcone.png";

const Footer = () => {
  return (
    <ComponentFooter>
      <WrapLogo>
        <LinkItem to="/">
          <TitleSpan>
            Mamine
            <ImgLogo src={MyIcone} alt="MyIcone" />
            Recepty
          </TitleSpan>
        </LinkItem>
        <WrapAdress>
          <span>21 New Humpolec Street</span>
          <span>Česká republika</span>
          <span>Pelh5imovsky okres</span>
          <span>432 34</span>
        </WrapAdress>
      </WrapLogo>
      <div>
        <span>Social links</span>
        <div>Social links</div>
      </div>
      <div> Copyright 2022 Avion LTD </div>
    </ComponentFooter>
  );
};

export default Footer;
