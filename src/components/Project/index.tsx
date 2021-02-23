import React from "react";

import {
  Container,
  Gif,
  Gif1,
  Content,
  Card,
  Text,
  Button,
  GithubIcon,
  Buttons,
  Cards,
} from "./styles";

const Project: React.FC = () => {
  return (
    <Container>
      <h1>Projetos</h1>
      <Content>
        <Cards>
          <Card>
            <Gif />
            <Text>
              <p>Happy</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae risus tortor. Fusce sollicitudin tellus ac metus porta,
                vitae ultrices diam consequat. Nullam purus dui, efficitur
                ornare pretium eget, pretium at arcu
              </p>
            </Text>
          </Card>
          <Buttons>
            <Button>
              <a href="https://github.com/GabrielCarmo-S/Happy">Demo</a>
            </Button>
            <a href="https://github.com/GabrielCarmo-S">
              <GithubIcon />
            </a>
          </Buttons>
        </Cards>
        <Cards>
          <Card>
            <Gif1 />
            <Text>
              <p>Be the Hero</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae risus tortor. Fusce sollicitudin tellus ac metus porta,
                vitae ultrices diam consequat. Nullam purus dui, efficitur
                ornare pretium eget, pretium at arcu
              </p>
            </Text>
          </Card>
          <Buttons>
            <Button>
              <a href="https://github.com/GabrielCarmo-S/Be-The-Hero">Demo</a>
            </Button>
            <a href="https://github.com/GabrielCarmo-S">
              <GithubIcon />
            </a>
          </Buttons>
        </Cards>
      </Content>
    </Container>
  );
};

export default Project;
