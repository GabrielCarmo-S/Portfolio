import React from "react";
import Banner from "../Banner";
import Card from "../Card";
import Header from "../Header";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Banner />
        <Card />
      </Wrapper>
    </Container>
  );
};

export default Layout;
