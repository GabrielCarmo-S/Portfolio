import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <p>Home</p>
        <p>Sobre mim</p>
        <p>Projetos</p>
        <p>Contatos</p>
      </div>
    </Container>
  );
};

export default Header;
