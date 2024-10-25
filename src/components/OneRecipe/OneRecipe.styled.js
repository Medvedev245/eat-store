import { Link } from "react-router-dom";
import styled from "styled-components";

export const OneItem = styled(Link)`
  width: 195px;
  text-decoration: none;
`;

export const ImgRecipe = styled.img`
  height: 200px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const SpanRecipe = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
  color: var(--iq-nameFood-text);
`;
