import React from "react";
import {
  DifferentSection,
  Element,
  ElementSpan,
  Image,
  List,
  Paragraf,
  Title,
} from "./DifferentBrand.styled";
import car from "../../Files/icons/car.png";
import Check from "../../Files/icons/Check.png";
import Vallet from "../../Files/icons/Vallet.png";
import Flower from "../../Files/icons/Flower.png";

const DifferentBrand = () => {
  return (
    <DifferentSection>
      <Title>Čím se naše značka liší</Title>

      <List>
        <Element>
          <Image src={car} alt="" />
          <ElementSpan>Rychlost - náš standard</ElementSpan>
          <Paragraf>
            Každý recept má svůj čas přípravy, který byl ověřen našimi
            specialisty.
          </Paragraf>
        </Element>
        <Element>
          <Image src={Check} alt="" />
          <ElementSpan>Potvrzeno specialisty</ElementSpan>
          <Paragraf>
            Všechny naše recepty byly ověřeny kuchaři nejvyšší třídy
          </Paragraf>
        </Element>
        <Element>
          <Image src={Vallet} alt="" />
          <ElementSpan>Bezkonkurenční ceny</ElementSpan>
          <Paragraf>
            Všechny ingredience jsou vybírány podle možností klientů.
          </Paragraf>
        </Element>
        <Element>
          <Image src={Flower} alt="" />
          <ElementSpan>Naše zdraví je vším.</ElementSpan>
          <Paragraf>
            Při přípravě receptů dáváme vždy přednost zdravým potravinám.
          </Paragraf>
        </Element>
      </List>
    </DifferentSection>
  );
};

export default DifferentBrand;
