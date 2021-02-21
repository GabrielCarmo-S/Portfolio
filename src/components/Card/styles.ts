import styled, { css } from "styled-components";
import Img2 from "../img/test4.svg";
import Img3 from "../img/g12.svg";
import Img4 from "../img/g13.svg";
import Img5 from "../img/g14.svg";

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
    width: 100%;
    height: 100%;
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

  margin-top: 60px;
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

    margin: 60px;
  }
`;

export const Cards = styled.div`
  display: flex;
  margin: 20px 20px;

  width: 300px;
  height: 350px;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;

  background: rgb(9, 9, 121);
  background: linear-gradient(
    90deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(126, 43, 204, 1) 0%,
    rgba(137, 35, 204, 1) 100%
  );

  cursor: pointer;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    background: rgb(164, 88, 199);
    background: linear-gradient(
      90deg,
      rgba(164, 88, 199, 1) 0%,
      rgba(204, 43, 168, 1) 0%,
      rgba(171, 35, 204, 1) 100%
    );
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
  width: 150px;
  height: 150px;

  margin-bottom: 20px;
`;

export const FrontIcon = styled.div`
  ${iconCSS}

  background: url(${Img4});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BackIcon = styled.div`
  ${iconCSS}

  background: url(${Img3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BdIcon = styled.div`
  ${iconCSS}

  background: url(${Img5});
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
    color: var(--white);
  }

  > span + span {
    font-size: 16px;
    color: var(--white);

    margin-top: 20px;
  }
`;
