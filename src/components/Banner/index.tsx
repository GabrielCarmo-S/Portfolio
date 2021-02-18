import React from "react";

import {
  Container,
  Content,
  MainButton,
  GithubIcon,
  LinkedinIcon,
  Img,
  Text,
} from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <Content>
        <Text>
          <p>Olá, eu sou</p>
          <h1>Gabriel Carmo</h1>
          <p>Desenvolvedor FullStack</p>

          <MainButton>
            <a href="#">
              <GithubIcon />
            </a>
            <a href="#">
              <LinkedinIcon />
            </a>
          </MainButton>
        </Text>

        <Img />
      </Content>
    </Container>
  );
};

export default Banner;
