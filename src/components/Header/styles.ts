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
    background: var(--white);

    width: 100vw;
    height: 50px;
    
    box-shadow: 0 5px 5px #f3f0f0;

    > div {
      display: flex;
      align-items: center;

      > a {
        color: var(--twitter);
        text-decoration: none;
        align-items: center;

        &:hover {
          color: var(--gray);
        }
      }

      > a + a {
        margin-left: 30px;
      }
    }
  }
`;
