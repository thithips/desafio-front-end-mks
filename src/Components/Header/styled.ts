import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 101px;
  background: var(--azul);
  button {
    margin-right: 88px;
  }

  @media (max-width: 768px) {
    button {
      margin-right: 44px;
    }
  }
`;

export const Logo = styled.div`
  h1,
  p {
    position: absolute;
    font-family: "Montserrat";
    font-style: normal;
    color: var(--branco);
  }
  h1 {
    top: 28px;
    height: 44px;
    left: 65px;
    font-weight: 600;
    font-size: 40px;
  }
  p {
    top: 45px;
    left: 165px;
    font-weight: 300;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    h1 {
      left: 30px;
    }
    p {
      left: 130px;
    }
  }
`;
