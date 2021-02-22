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
        <LinkedinIcon />
        <GithubIcon />
      </ContentIcon>
      <Text>
        <p>Feito por Gabriel Carmo</p>
      </Text>
    </Container>
  );
};

export default Footer;
