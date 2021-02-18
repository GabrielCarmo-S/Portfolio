import styled, { css } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Img1 from "../img/test.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--white);
  margin-left: 0;

  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  
  background: rgb(113,7,148);
  background: linear-gradient(90deg, rgba(113,7,148,1) 30%, rgba(171,0,255,1) 100%);

`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 150px;

  > p {
    color: var(--white);
    font-size: 20px;
  }
  > p + p {
    margin-top: 10px;
  }
  > h1 {
    color: var(--white);
    text-transform: uppercase;
    font-weight: 900;
  }
`;

export const MainButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10px;
  padding-top: 30px;

  > a + a {
    margin-left: 20px;
  }
`;

export const Img = styled.div`
  display: none;

  @media (min-width: 800px) {
    margin-top: 70px;
    display: flex;
    width: 400px;
    height: 400px;

    background: url(${Img1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    align-items: center;
    justify-content: center;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--twitter);
  &:hover,
  &.active {
    fill: var(--gray);
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${iconCSS}
`;

export const LinkedinIcon = styled(FaLinkedin)`
  ${iconCSS}
`;

