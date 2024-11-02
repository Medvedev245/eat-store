import styled from "styled-components";

export const SectionJoinBlock = styled.section`
  width: 100%;
  height: 480px;
  background-color: var(--iq-BgJoinBlock);
  padding: 55px 80px;

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
    /* padding: 30px 15px; */
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--iq-brand-text);
  align-items: center;
  height: 340px;
  width: 1000px;
  background-color: white;
`;

export const WrapMainText = styled.h2`
  font-weight: 400;
`;

export const WrapText = styled.p`
  width: 400px;
`;

export const FormWrap = styled.form``;
