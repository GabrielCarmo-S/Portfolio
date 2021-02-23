import React from "react";

import {
  Container,
  Gif,
  Content,
  Card,
  Text,
  Button,
  GithubIcon,
  Buttons
} from "./styles";

const Project: React.FC = () => {
  return (
    <Container>
      <h1>Projetos</h1>
      <Content>
        <Card>
          <Gif />
          <Text>
            <p>Happy</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              risus tortor. Fusce sollicitudin tellus ac metus porta, vitae
              ultrices diam consequat. Nullam purus dui, efficitur ornare
              pretium eget, pretium at arcu
            </p>
          </Text>
        </Card>
        <Buttons>
          <Button>
            <a href="/">Demo</a>
          </Button>
          <GithubIcon />
        </Buttons>
      </Content>
      
    </Container>
  );
};

export default Project;
