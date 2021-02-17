import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="">Home</a>
        <a href="">Sobre mim</a>
        <a href="">Projetos</a>
        <a href="">Contatos</a>
      </div>
    </Container>
  );
};

export default Header;
