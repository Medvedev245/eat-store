import styled from "styled-components";

export const SectionJoinBlock = styled.section`
  width: 100%;
  height: 480px;
  background-color: var(--iq-BgJoinBlock);
  display: flex;
  justify-content: space-around;
  align-items: center;

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
  justify-content: center;
  height: 340px;
  width: 1000px;
  background-color: white;

  @media screen and (max-width: 1200px) {
    width: 800px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
    padding: 20px;
  }
`;

export const WrapMainText = styled.h2`
  font-weight: 400;
  margin-bottom: 15px;
  font-weight: bold;
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 17px;
    text-align: center;
  }
`;

export const WrapText = styled.p`
  text-align: center;
  width: 400px;
  margin-bottom: 70px;
  @media screen and (max-width: 1200px) {
    font-size: 14px;
    width: 250px;
    margin-bottom: 45px;
  }

  @media screen and (max-width: 767px) {
    /* padding: 30px 15px; */
  }
`;

export const FormWrap = styled.form`
  height: 55px;
  width: 470px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media screen and (max-width: 1200px) {
    width: 400px;
  }

  @media screen and (max-width: 767px) {
    width: 300px;
  }
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 767px) {
  }
`;

export const SubmitButton = styled.button`
  width: 170px;
  height: 55px;
  padding: 4px 4px;
  border: 2px solid var(--iq-header-title);
  color: var(--iq-brand-text);
  border-radius: 5px;
  align-items: center;
  background-color: var(--iq-Footr-text);
  &:hover,
  &:focus {
    background-color: var(--iq-header-title);
    transition: 0.5s;
  }
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
    width: 80px;
    font-size: 10px;
  }
`;
