import React from "react";

import {
  Container,
  Cards,
  FrontIcon,
  BackIcon,
  BdIcon,
  Text,
  Content,
  Interres
} from "./styles";

const Card: React.FC = () => {
  return (
    <Container>
      <Interres>Meus Interesses</Interres>
      <Content>
        <Cards>
            <FrontIcon />
          <Text>
            <span>Front-End</span>
            <span>
              Nullam lacinia leo vulputate, consequat elit sit amet, convallis
              dui. Mauris et rhoncus sem.
            </span>
          </Text>
        </Cards>

        <Cards>
            <BackIcon />
          <Text>
            <span>Back-End</span>
            <span>
              Nullam lacinia leo vulputate, consequat elit sit amet, convallis
              dui. Mauris et rhoncus sem.
            </span>
          </Text>
        </Cards>
        <Cards>
            <BdIcon />
          <Text>
            <span>Banco de Dados</span>
            <span>
              Nullam lacinia leo vulputate, consequat elit sit amet, convallis
              dui. Mauris et rhoncus sem.
            </span>
          </Text>
        </Cards>
      </Content>
    </Container>
  );
};

export default Card;
