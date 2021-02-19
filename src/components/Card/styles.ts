import styled, {css} from 'styled-components';
import { FaReact, FaNode, FaDatabase } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  flex-direction: column;

  @media(min-width: 800px){
    flex-direction: row;
  }
`;

export const Cards = styled.div`
  display: flex;
  margin: 20px 20px;

  width: 300px;
  height: 300px;

  justify-content: center;
  align-items:center;
  flex-direction: column;
  
  border-radius: 10px;

  background: var(--white);

  cursor: pointer;

  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  &:hover {
  box-shadow: 0 24px 48px rgba(0,0,0,0.50), 0 10px 10px rgba(0,0,0,0.22);
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

export const FrontIcon = styled(FaReact)`${iconCSS}`;

export const BackIcon = styled(FaNode)`${iconCSS}`;

export const BdIcon = styled(FaDatabase)`${iconCSS}`;

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