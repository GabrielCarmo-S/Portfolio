import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: var(--white);

  > h1 {
    margin: 20px;
    color: var(--secondary);
  }

  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  width: 320px;
  height: 100%;

  background: white;

  border-radius: 10px;

  cursor: pointer;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  margin-bottom: 20px;

  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: var(--white);

  flex-direction: column;
`;


export const Gif = styled.div`
  width: 320px;
  height: 320px;

  background-image: url('https://raw.githubusercontent.com/GabrielCarmo-S/Happy/main/github/n1.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  border-radius: 10px;

  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;


export const Text = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;

  flex-direction: column;

  > p {
    font-size: 20px;
    color: var(--twitter);
  }

  > p + p {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px;
  }
  
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Button = styled.div`
  width: 100px;
  height: 100%;

  background: var(--twitter);
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 20px;
  padding: 10px;

  > a {
    color: var(--white);
    text-decoration: 0;
  }

`;

export const GithubIcon = styled(FaGithub)`
  width: 50px;
  height: 50px;


`;