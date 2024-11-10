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
      <Text>Abou Us</Text>
      <SectionContainer>
        <Section>
          <SpanText>Nice to meet you</SpanText>
          <InnerText>
            Is a phrase often uttered upon meeting someone for the first time.
            It serves as a courteous acknowledgment of the introduction,
            expressing a positive sentiment toward the encounter. This simple
            greeting conveys warmth and friendliness, fostering a welcoming
            atmosphere between individuals. It's a respectful way to initiate
            conversation and establish a connection, laying the groundwork for
            future interactions. Whether in a formal or informal setting, "Nice
            to meet you" sets a pleasant tone and signifies an eagerness to
            engage with others.
          </InnerText>
        </Section>
        <Section>
          <SpanText>Join us</SpanText>
          <Image src={image} alt="me" width={600} height={350} />
        </Section>

        <Section>
          <SpanText>Our team</SpanText>
          <Image src={our_team} alt="me" width={600} height={350} />
        </Section>
        <Section>
          <SpanText>Our team</SpanText>
          <InnerText>
            Our team consists of dedicated individuals who bring diverse skills
            and perspectives to the table. Each member contributes their unique
            talents and experiences, working collaboratively towards common
            goals. Together, we strive for excellence, innovation, and success.
            With strong communication and teamwork, we tackle challenges and
            celebrate achievements, fostering a supportive and inclusive
            environment where everyone can thrive.
          </InnerText>
        </Section>
      </SectionContainer>
    </AboutContainer>
  );
};

export default AboutUs;
