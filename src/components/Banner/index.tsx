import React from "react";

import {
  Container,
  Content,
  MainButton,
  GithubIcon,
  LinkedinIcon,
  Img,
  Text,
  Imga,
} from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <Content>
        <Imga>
          <Text>
            <p>Olá, eu sou</p>
            <h1>Gabriel Carmo</h1>
            <p>Desenvolvedor FullStack</p>
            <MainButton>
              <div>
                <a href="https://github.com/GabrielCarmo-S">
                  <GithubIcon />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/gabrielcarmo-s/">
                  <LinkedinIcon />
                </a>
              </div>
            </MainButton>
          </Text>
          <Img />
        </Imga>
      </Content>
    </Container>
  );
};

export default Banner;
