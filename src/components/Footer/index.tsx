import React from "react";

import {
  Container,
  Text,
  LinkedinIcon,
  GithubIcon,
  ContentIcon,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>
        <p>Gabriel Carmo</p>
      </Text>
      <ContentIcon>
        <a href="https://www.linkedin.com/in/gabrielcarmo-s/">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/GabrielCarmo-S">
          <GithubIcon />
        </a>
      </ContentIcon>
      <Text>
        <p>Feito por Gabriel Carmo</p>
      </Text>
    </Container>
  );
};

export default Footer;
