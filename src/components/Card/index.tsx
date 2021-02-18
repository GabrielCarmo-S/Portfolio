import React from "react";

import {
  Container,
  Cards,
  FrontIcon,
  BackIcon,
  BdIcon,
  Border,
  
} from "./styles";

const Card: React.FC = () => {
  return (
    <Container>
      <Cards>
        <Border>
          <FrontIcon />
        </Border>
      </Cards>
      <Cards>
        <Border>
          <BackIcon />
        </Border>
      </Cards>
      <Cards>
        <Border>
          <BdIcon />
        </Border>
      </Cards>
    </Container>
  );
};

export default Card;
