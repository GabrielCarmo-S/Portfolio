import React from "react";

import {
  Container,
  Content,
  MainButton,
  GithubIcon,
  LinkedinIcon,
  Card
} from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <Content>
        <p>Olá, eu sou</p>
        <h1>Gabriel Carmo</h1>
        <p>Desenvolvedor FullStack</p>
      </Content>

      <MainButton>
        <a href="#">
          <GithubIcon />
        </a>
        <a href="#">
          <LinkedinIcon />
        </a>
      </MainButton>

      <Card /> 
    </Container>
  );
};

export default Banner;
