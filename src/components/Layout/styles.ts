import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > span {
    display: flex;

    color: var(--twitter);
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 30px;

    font-weight: 900;

  }
`;
