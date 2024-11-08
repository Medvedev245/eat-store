import React from "react";
import {
  ComponentFooter,
  MainWrapLinks,
  WrapAdress,
  WrapLinks,
  WrapLogo,
} from "./Footer.styled";
import { ImgLogo, LinkItem, TitleSpan } from "../Header/Header.styled";
import MyIcone from "../../Files/icons/MyIcone.png";
import In from "../../Files/IconsLinks/link.png";
import faceBook from "../../Files/IconsLinks/face.png";
import Tv from "../../Files/IconsLinks/tv.png";
import Scype from "../../Files/IconsLinks/skype.png";
import Twitter from "../../Files/IconsLinks/vector.png";
import Pacage from "../../Files/IconsLinks/p.png";

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
      <MainWrapLinks>
        <span>Social links</span>
        <WrapLinks>
          <img src={In} alt="" />
          <img src={faceBook} alt="" />
          <img src={Tv} alt="" />
          <img src={Scype} alt="" />
          <img src={Twitter} alt="" />
          <img src={Pacage} alt="" />
        </WrapLinks>
      </MainWrapLinks>
      <div> Copyright 2022 Avion LTD </div>
    </ComponentFooter>
  );
};

export default Footer;
