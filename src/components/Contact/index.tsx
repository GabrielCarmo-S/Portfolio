import React from "react";

import {
  Container,
  Content,
  ContactIcon,
  Text,
  CardIcon,
  WhatsIcon,
  EmailIcon,
  ContainerCard,
} from "./styles";

const Contact: React.FC = () => {
  return (
    <Container>
      <Content>
        <span>Contate-nos</span>
        <ContactIcon />
        <Text>
          <span>Olá, se precisar de algo nos contate-nos.</span>
        </Text>

        <ContainerCard>
          <CardIcon>
            <WhatsIcon />
            <p>Mensagens</p>
          </CardIcon>
          <CardIcon>
            <EmailIcon />
            <p>E-mail</p>
          </CardIcon>
        </ContainerCard>
      </Content>
    </Container>
  );
};

export default Contact;
