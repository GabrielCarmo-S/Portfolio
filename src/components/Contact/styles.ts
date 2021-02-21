import styled from "styled-components";
import Img1 from "../img/contact.svg";
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
  height: 100px;
  > span {
    font-size: 20px;
    color: var(--secondary);
  }

  > span + span {
    font-size: 16px;
    color: var(--secondary);

    margin-top: 20px;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100px;
  height: 100px;

  background: red;

  border-radius: 10px;

  flex-direction: column;

  margin: 20px;
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const WhatsIcon = styled.div``;

export const EmailIcon = styled.div`
  width: 50px;
  height: 50px;

  background: url(${Img3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
