import React from "react";
import Banner from "../Banner";
import Header from "../Header";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Banner />
      </Wrapper>
    </Container>
  );
};

export default Layout;
