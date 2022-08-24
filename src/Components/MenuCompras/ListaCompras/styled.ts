import styled from "styled-components";

export const ListaItens = styled.ul<{ size: number }>`
  min-height: ${(props) => (props.size > 5 ? `none` : `615px`)};
  margin-top: 64px;

  li {
    max-width: 380px;
    min-height: 95px;
    background: var(--branco);
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 0 auto 22px;
    padding: 10px 15px;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0 10px;
    position: relative;

    img {
      width: 50px;
      height: 50px;
    }
    p {
      width: 113px;
      font-weight: 400;
      font-size: 13px;

      &:nth-child(1) {
        font-size: 8px;
        font-weight: 400;
      }

      &:nth-child(4) {
        font-size: 14px;
        font-weight: 700;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      background: var(--branco);
      max-width: 85px;
      margin: 0 0 10px 20px;
      div {
        border: 0.3px solid #bfbfbf;
        margin-top: 4px;
        border-radius: 4px;
        max-width: 50px;
        max-height: 20px;
        display: flex;
        align-items: center;

        p {
          text-align: center;
          border-right: 0.2px solid #bfbfbf;
          border-left: 0.2px solid #bfbfbf;
          height: 12px;
          line-height: 12px;
        }

        button {
          padding: 2px 5px;
          font-weight: 400;
          border: none;
          background: none;
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 767px) {
    /* padding: 0 10px; */
    li {
      max-width: 350px;
    }
  }
`;

export const Fechar = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000;
    max-width: 18px;
    max-height: 18px;
    border-radius: 50%;
    padding-left: 11px;
    position: absolute;
    top: -5%;
    right: -2%;
    p {
      width: 1px;
    }
    img {
      width: 8px;
      height: 17px;
    }
  }
`;
