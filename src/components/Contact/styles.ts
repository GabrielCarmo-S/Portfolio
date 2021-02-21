import styled, { css } from "styled-components";
import Img1 from "../img/contact.svg";
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

  background: #8a2387;
  background: -webkit-linear-gradient(
    to right,
    #f27121,
    #e94057,
    #8a2387
  ); 
  background: linear-gradient(
    to right,
    #f27121,
    #e94057,
    #8a2387
  ); 
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
