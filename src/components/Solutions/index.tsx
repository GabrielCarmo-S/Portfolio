import React from "react";

import {
  Container,
  Title,
  Content,
  Card,
  DesignIcon,
  CardTitle,
  CardText,
  DevIcon,
  LandIcon,
  BackIcon,
  BdIcon,
  ApiIcon
} from "./styles";

const Solutions: React.FC = () => {
  return (
    <Container>
      <Title>Desenvolvendo Soluções</Title>
      <Content>
        <Card>
          <DesignIcon />
          <CardTitle>UI Design</CardTitle>
          <CardText>Faço o UI Design de Sites. Tanto Landing Page, quanto Aplicativos Mobile</CardText>
        </Card>
        <Card>
          <DevIcon />
          <CardTitle>Web Sites</CardTitle>
          <CardText>Construo do zero sites responsivos em ReactJS</CardText>
        </Card>
        <Card>
          <LandIcon />
          <CardTitle>Landing Page</CardTitle>
          <CardText>Criação de Landings Pages</CardText>
        </Card>
      </Content>

      <Content>
        <Card>
          <BackIcon />
          <CardTitle>Backend</CardTitle>
          <CardText>Faço o backend do site em NodeJS, PHP</CardText>
        </Card>
        <Card>
          <BdIcon />
          <CardTitle>Banco de Dados</CardTitle>
          <CardText>Utilizo Mysql, Postgress e MongoDB nas aplicações</CardText>
        </Card>
        <Card>
          <ApiIcon />
          <CardTitle>Integrações</CardTitle>
          <CardText>Faço integrações de API'S para seu front-ebd e back-end</CardText>
        </Card>
      </Content>
    </Container>
  );
};

export default Solutions;
