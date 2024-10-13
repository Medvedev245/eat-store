import React from "react";
import { Container } from "./BlurBackground.styled";

const BlurBackground = ({ onClick }) => {
  return <Container onClick={onClick}></Container>;
};

export default BlurBackground;
