import React from "react";

import {
  Container,
  Content,
  MainButton,
  GithubIcon,
  LinkedinIcon,
  Img,
  Text,
  Imga
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
              <a href="#">
                <GithubIcon />
              </a>
              <a href="#">
                <LinkedinIcon />
              </a>
            </MainButton>
          </Text>
          <Img />
        </Imga>
        
      </Content>
    </Container>
  );
};

export default Banner;
