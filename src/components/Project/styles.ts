import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-image: linear-gradient(to right top, #8041d1, #973dd2, #ad38d1, #c132d0, #d52acd);
  
  > h1 {
    margin: 20px;
    color: var(--white);
  }

  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  flex-direction: column;

  @media(min-width: 850px){
    flex-direction: row;
  } 
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 320px;
  height: 100%;

  background: white;

  border-radius: 10px;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  margin-bottom: 20px;

  flex-direction: column;

  @media(min-width: 850px){
    width: 400px;
  } 

`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  flex-direction: column;
`;

export const Gif = styled.div`
  width: 100%;
  height: 320px;

  background-image: url("https://raw.githubusercontent.com/GabrielCarmo-S/Happy/main/github/n1.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  border-radius: 10px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Gif1 = styled.div`
  width: 100%;
  height: 320px;

  background-image: url("https://raw.githubusercontent.com/GabrielCarmo-S/Be-The-Hero/main/github/n1.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  border-radius: 10px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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

  cursor: pointer;

  margin: 20px 20px 20px 0;
  padding: 10px;

  > a {
    color: var(--white);
    text-decoration: 0;
  }
`;

export const GithubIcon = styled(FaGithub)`
  width: 50px;
  height: 50px;

  cursor: pointer;

  fill: var(--twitter);
`;
