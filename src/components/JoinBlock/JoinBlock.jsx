import React, { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
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
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let email = event.target[0].value;
    setIsSubmitting(true);
    console.log(email);

    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      event.target.reset();
      Notify.success("Zpráva byla odeslána");
    }, 1000);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
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
          <InputField
            type="email"
            placeholder="Zadejte váš e-mail"
            value={email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Odesílání..." : "Přihlásit se"}
          </SubmitButton>
        </FormWrap>
      </MainContainer>
    </SectionJoinBlock>
  );
};

export default JoinBlock;
