import {
  Section,
  AboutContainer,
  SectionContainer,
  Text,
  SpanText,
  Image,
  InnerText,
} from "./AboutUs.styled";
import image from "../../Files/img/n2m2.jpg";
import our_team from "../../Files/img/our_team.jpg";

const AboutUs = () => {
  return (
    <AboutContainer>
      <Text>O nás</Text>
      <SectionContainer>
        <Section>
          <SpanText>Rád vás poznávám</SpanText>
          <InnerText>
            Je to fráze, která se často používá při setkání s někým poprvé.
            Slouží jako zdvořilé uznání představení a vyjadřuje pozitivní postoj
            k tomuto setkání. Tento jednoduchý pozdrav vyjadřuje vřelost a
            přátelskost, čímž podporuje příjemnou atmosféru mezi lidmi. Je to
            zdvořilý způsob, jak zahájit konverzaci a navázat kontakt, který
            může vést k budoucím interakcím. Ať už v formálním nebo neformálním
            prostředí, „Rád vás poznávám“ nastavuje příjemný tón a vyjadřuje
            ochotu navázat kontakt s ostatními.
          </InnerText>
        </Section>
        <Section>
          <SpanText>Přidejte se k nám</SpanText>
          <Image src={image} alt="me" width={600} height={350} />
        </Section>

        <Section>
          <SpanText>Náš tým</SpanText>
          <Image src={our_team} alt="me" width={600} height={350} />
        </Section>
        <Section>
          <SpanText>Náš tým</SpanText>
          <InnerText>
            Náš tým se skládá z oddaných jednotlivců, kteří přinášejí různé
            dovednosti a pohledy na věc. Každý člen přispívá svými jedinečnými
            schopnostmi a zkušenostmi a společně pracujeme na dosažení
            společných cílů. Usilujeme o výjimečnost, inovace a úspěch. Díky
            silné komunikaci a týmové spolupráci překonáváme výzvy a slavíme
            úspěchy, čímž vytváříme podpůrné a inkluzivní prostředí, ve kterém
            se každý může rozvíjet.
          </InnerText>
        </Section>
      </SectionContainer>
    </AboutContainer>
  );
};

export default AboutUs;
