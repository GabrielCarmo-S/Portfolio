import styled, { css } from "styled-components";
import DeIcon from "../img/design.svg";
import DevsIcon from "../img/desenvolvimento-web.svg";
import LandP from "../img/landing-page.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: red;

  flex-direction: column;
`;

export const Title = styled.div`
  margin-top: 20px;
  color: var(--white);
  font-size: 26px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  display: flex;
  margin: 20px 20px;

  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;

  background: blue;

  border-radius: 5px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  flex-direction: column;

  cursor: pointer;

  &:focus,
  &:hover {
    background: red;
  }
`;

const iconCSS = css`
  display: flex;

  width: 150px;
  height: 150px;

  margin-top: 10px;
`;

export const DesignIcon = styled.div`
  ${iconCSS}
  
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover;
  background: url(${DeIcon});
`;

export const DevIcon = styled.div`
  ${iconCSS}

  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover;
  background: url(${DevsIcon});
`;

export const LandIcon = styled.div`
  ${iconCSS}

  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover;
  background: url(${LandP});
`;


export const CardTitle = styled.div`
  color: var(--white);
  font-size: 26px;
  margin-top: 20px;
`;

export const CardText = styled.div`
  color: var(--white);
  font-size: 16px;

  text-align: center;

  margin: 20px 20px;
`;
