import styled from "styled-components";

export const Container = styled.aside<{menuOpen?: boolean}>`
  background: var(--azul);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 486px;
  flex-basis: auto;
  height: calc(100% - 0px);
  right: 0;
  overflow-y: auto;
  align-content: center;
  z-index: 2;
  transform: ${props=> (props.menuOpen ? `translateX(0)`: `translateX(100%)`)};
 
  transition: .5s;
  
  article {
    display: flex;
    justify-content: space-around;
    gap: 0 100px;
    padding-top: 36px;

    h1 {
      width: 180px;

      font-weight: 700;
      font-size: 27px;
      line-height: 33px;
      color: var(--branco);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000000;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      padding-left: 10px;
    }
  }
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0 120px;
  margin-bottom: 45px;
  p {
    color: var(--branco);
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
  }
`;

export const FinalizarCompra = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  min-height: 97px;
  p {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: var(--branco);
  }
`;
