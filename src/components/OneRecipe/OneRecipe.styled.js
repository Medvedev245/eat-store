import { Link } from "react-router-dom";
import styled from "styled-components";

export const OneItem = styled(Link)`
  width: 195px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  background-color: var(--iq-Card-BG);
  border-radius: 10px;
  justify-content: space-between;
`;

export const ImgRecipe = styled.img`
  height: 200px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const SpanRecipe = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--iq-nameFood-text);
`;

export const TextRecipe = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
  color: var(--iq-brand-text);
`;

export const RaithWrap = styled.div`
  display: flex;
  margin-top: auto;
`;
export const Wrap = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
