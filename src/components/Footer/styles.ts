import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;

  @media(min-width: 700px){
    height: 50px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-direction: column;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    90deg,
    rgba(159, 10, 162, 1) 13%,
    rgba(104, 10, 164, 1) 100%
  );

  > p {
    color: var(--white);
    font-size: 20px;

    margin: 10px;
  }

  @media(min-width: 700px){
    flex-direction: row;
  }
`;
