import React from "react";
import Banner from "../Banner";
import Card from "../Card";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";
import Project from "../Project";
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
        <Project />
        <Contact />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
