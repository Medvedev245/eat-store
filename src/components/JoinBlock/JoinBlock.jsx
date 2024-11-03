import React from "react";
import {
  FormWrap,
  InputField,
  MainContainer,
  SectionJoinBlock,
  SubmitButton,
  WrapMainText,
  WrapText,
} from "./JoinBlock.styled";

const JoinBlock = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    console.log(email);
  };
  return (
    <SectionJoinBlock>
      <MainContainer>
        <WrapMainText>
          Přihlaste se k odběru a dostávejte nové recepty na e-mail.
        </WrapMainText>
        <WrapText>
          Přihlaste se k odběru týdenních nových receptů od předních odborníků
        </WrapText>
        <FormWrap onSubmit={handleSubmit}>
          <InputField type="email" placeholder="Zadejte váš e-mail" />
          <SubmitButton type="submit">Přihlásit se</SubmitButton>
        </FormWrap>
      </MainContainer>
    </SectionJoinBlock>
  );
};

export default JoinBlock;
