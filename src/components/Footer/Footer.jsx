import React from "react";
import {
  ComponentFooter,
  Copirith,
  FooterWrap,
  Image,
  ImageLink,
  MainWrapLinks,
  WrapAddress,
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
      <FooterWrap>
        <WrapLogo>
          <LinkItem to="/">
            <TitleSpan>
              Mamine
              <ImgLogo src={MyIcone} alt="MyIcone" />
              Recepty
            </TitleSpan>
          </LinkItem>
          <WrapAddress>
            <span>21 New Humpolec Street</span>
            <span>Česká republika</span>
            <span>Pelhřimovsky okres</span>
            <span>432 34</span>
          </WrapAddress>
        </WrapLogo>
        <MainWrapLinks>
          <span>Social links</span>
          <WrapLinks>
            <ImageLink to="#">
              <Image src={In} alt="" />
            </ImageLink>

            <ImageLink to="#">
              <Image src={faceBook} alt="" />
            </ImageLink>

            <ImageLink to="#">
              <Image src={Tv} alt="" />
            </ImageLink>

            <ImageLink to="#">
              <Image src={Scype} alt="" />
            </ImageLink>

            <ImageLink to="#">
              <Image src={Twitter} alt="" />
            </ImageLink>

            <ImageLink to="#">
              <Image src={Pacage} alt="" />
            </ImageLink>
          </WrapLinks>
        </MainWrapLinks>
      </FooterWrap>

      <Copirith> Copyright 2024 MamineRecepty LTD </Copirith>
    </ComponentFooter>
  );
};

export default Footer;
