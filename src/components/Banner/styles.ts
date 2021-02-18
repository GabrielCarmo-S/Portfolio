import styled, { css } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background: var(--white);
  margin-left: 0;

  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;
  flex-direction: column;

  > p {
    color: var(--gray);
    font-size: 20px;
  }
  > p + p {
    margin-top: 10px;
  }

  > h1 {
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

export const Card = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  padding: 20px;

  margin-top: 40px;

  border-radius: 10px;
  box-shadow:5px 5px 5px 5px #f3f0f0;
`;
