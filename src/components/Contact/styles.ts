import styled, { css } from "styled-components";
import Img1 from "../img/contact.svg";
import Img4 from "../img/g15.svg";

import Img2 from "../img/contact1.svg";
import Img3 from "../img/email.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  flex-direction: column;

  > span {
    font-size: 30px;
    margin-top: 40px;
    margin-bottom: 10px;
    color: var(--white);
  }

  background: #da22ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #9733ee,
    #da22ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #9733ee,
    #da22ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px;

  width: 300px;
  height: 300px;

  background: url(${Img1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media(min-width: 700px){
    background: url(${Img4});
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  width: 250px;

  margin: 20px;

  > span {
    font-size: 20px;
    color: var(--white);
  }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100px;
  height: 100px;

  background: var(--white);

  border-radius: 10px;

  flex-direction: column;

  margin: 20px;

  cursor: pointer;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  > p {
    color: var(--twitter);
    margin-bottom: 10px;
  }

  &:hover {
    background: rgb(164, 88, 199);
    background: linear-gradient(
      90deg,
      rgba(164, 88, 199, 1) 0%,
      rgba(204, 43, 168, 1) 0%,
      rgba(171, 35, 204, 1) 100%
    );

    > p, svg {
      color: white;
    }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: row;

  margin-bottom: 20px;
`;

const iconCSS = css`
  width: 50px;
  height: 50px;

  margin: 10px;
`;

export const WhatsIcon = styled.div`
  ${iconCSS}

  background: url(${Img2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const EmailIcon = styled.div`
  ${iconCSS}

  background: url(${Img3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
