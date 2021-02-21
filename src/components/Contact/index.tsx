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
        <ContactIcon />
        <Text>
          <span>dddddddddddddddddddd</span>
          <span>dddddddddddddddddddddddddd</span>
        </Text>

        <ContainerCard>
        <CardIcon>
          <WhatsIcon />
        </CardIcon>
        <CardIcon>
          <EmailIcon />
        </CardIcon>
      </ContainerCard>
      </Content>
      
    </Container>
  );
};

export default Contact;
