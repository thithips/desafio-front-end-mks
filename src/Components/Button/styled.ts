import styled from "styled-components";

export const Btn = styled.button`
  
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background:  var(--branco);

  div {
    display: flex;
    justify-content: center;
    gap: 10px;

    p {
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
