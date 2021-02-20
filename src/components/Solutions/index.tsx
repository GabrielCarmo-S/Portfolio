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
  LandIcon
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
          <DesignIcon />
          <CardTitle>UI Design</CardTitle>
          <CardText>Faço o UI Design de Sites. Tanto Landing Page, quanto Aplicativos Mobile</CardText>
        </Card>
        <Card>
          <DesignIcon />
          <CardTitle>UI Design</CardTitle>
          <CardText>Faço o UI Design de Sites. Tanto Landing Page, quanto Aplicativos Mobile</CardText>
        </Card>
        <Card>
          <DesignIcon />
          <CardTitle>UI Design</CardTitle>
          <CardText>Faço o UI Design de Sites. Tanto Landing Page, quanto Aplicativos Mobile</CardText>
        </Card>
      </Content>
    </Container>
  );
};

export default Solutions;
