import styled, { css } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    90deg,
    rgba(159, 10, 162, 1) 13%,
    rgba(104, 10, 164, 1) 100%
  );

  flex-direction: column;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-direction: column;

  width: 100%;
  height: 100%;

  > p {
    color: var(--white);
    font-size: 20px;

    margin: 10px;
  }

  @media(min-width: 700px){
    flex-direction: row;
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
  width: 100%;
  height: 100%;
`;

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--white);
  &:hover,
  &.active {
    fill: var(--twitter);
  }

 
`;

export const GithubIcon = styled(FaGithub)`
  ${iconCSS}

  margin-left: 10px;
`;

export const LinkedinIcon = styled(FaLinkedin)`
  ${iconCSS}
`;


