import React from "react";

import {
  Container,
  Cards,
  FrontIcon,
  BackIcon,
  BdIcon,
  Border,
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
          <Border>
            <FrontIcon />
          </Border>
          <Text>
            <span>Front-End</span>
            <span>
              Nullam lacinia leo vulputate, consequat elit sit amet, convallis
              dui. Mauris et rhoncus sem.
            </span>
          </Text>
        </Cards>

        <Cards>
          <Border>
            <BackIcon />
          </Border>
          <Text>
            <span>Back-End</span>
            <span>
              Nullam lacinia leo vulputate, consequat elit sit amet, convallis
              dui. Mauris et rhoncus sem.
            </span>
          </Text>
        </Cards>
        <Cards>
          <Border>
            <BdIcon />
          </Border>
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
