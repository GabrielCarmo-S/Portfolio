import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 11px 16px;
    margin: 0;
    top: 0;
    background: linear-gradient(
    90deg,
    rgba(159, 10, 162, 1) 13%,
    rgba(104, 10, 164, 1) 100%
  );

    width: 100vw;
    height: 50px;
    
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

    > div {
      display: flex;
      align-items: center;

      > p {
        color: var(--white);
        text-decoration: none;
        align-items: center;

        cursor: pointer;

        &:hover {
          color: var(--twitter);
        }
      }

      > p + p {
        margin-left: 30px;
      }
    }
  }
`;
