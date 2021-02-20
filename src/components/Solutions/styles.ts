import styled, { css } from "styled-components";
import DeIcon from "../img/design.svg";
import DevsIcon from "../img/desenvolvimento-web.svg";
import LandP from "../img/landing-page.svg";
import BackendIcon from "../img/backend.svg";
import BancoIcon from "../img/data-storage.svg";
import APIIcon from "../img/browser.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: rgb(115, 54, 219);
  background: linear-gradient(
    90deg,
    rgba(115, 54, 219, 1) 15%,
    rgba(34, 32, 162, 1) 88%
  );

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

  background: #2626bc;

  border-radius: 5px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  flex-direction: column;

  cursor: pointer;

  &:focus,
  &:hover {
    background: #e30970;
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

export const BackIcon = styled.div`
  ${iconCSS}

  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover;
  background: url(${BackendIcon});
`;

export const BdIcon = styled.div`
  ${iconCSS}

  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover;
  background: url(${BancoIcon});
`;

export const ApiIcon = styled.div`
  ${iconCSS}

  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover;
  background: url(${APIIcon});
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
