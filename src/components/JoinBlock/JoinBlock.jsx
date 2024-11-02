import React from "react";
import {
  FormWrap,
  MainContainer,
  SectionJoinBlock,
  WrapMainText,
  WrapText,
} from "./JoinBlock.styled";

const JoinBlock = () => {
  return (
    <SectionJoinBlock>
      <MainContainer>
        <WrapMainText>
          Přihlaste se k odběru a dostávejte nové recepty na e-mail.
        </WrapMainText>
        <WrapText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          debitis quod suscipit vitae nisi labore! Eligendi est ducimus mollitia
        </WrapText>
        <FormWrap action="">
          <input type="text" />
          <button type="submit">button</button>
        </FormWrap>
      </MainContainer>
    </SectionJoinBlock>
  );
};

export default JoinBlock;
