import styled, { css } from "styled-components";
import { FaReact, FaNode, FaDatabase } from "react-icons/fa";
import Img2 from "../img/test4.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  flex-direction: column;

  background: url(${Img2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 800px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const Interres = styled.div`
  height: 30px;
  width: 250px;
  background: transparent;

  display: flex;
  justify-content: center;

  font-size: 26px;
  font-weight: 900;
  color: rgb(109, 131, 242);

  margin-top: 20px;

  @media (min-width: 800px) {
    margin-top: 120px
  }
 
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: transparent;

  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    font-size: 1.5rem;
    font-weight: 900;
    color: rgb(109, 131, 242);
    text-align: center;
    letter-spacing: 1px;
  }
`;

export const Cards = styled.div`
  display: flex;
  margin: 20px 20px;

  width: 300px;
  height: 300px;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;

  background: var(--white);

  cursor: pointer;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  > span {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
  }
`;

export const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  margin-top: 20px;

  background: var(--twitter);

  border-radius: 50%;

  margin-bottom: 20px;
`;

const iconCSS = css`
  width: 51px;
  height: 51px;

  fill: var(--white);
`;

export const FrontIcon = styled(FaReact)`
  ${iconCSS}
`;

export const BackIcon = styled(FaNode)`
  ${iconCSS}
`;

export const BdIcon = styled(FaDatabase)`
  ${iconCSS}
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
    color: var(--twitter);
  }

  > span + span {
    font-size: 16px;
    color: var(--secondary);
    margin-top: 20px;
  }
`;
