import React from "react";
import Banner from "../Banner";
import Card from "../Card";
import Header from "../Header";
import Solutions from "../Solutions";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Banner />
        <Card />
        <Solutions />
      </Wrapper>
    </Container>
  );
};

export default Layout;
