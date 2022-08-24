import styled from "styled-components";

export const ProdutosContainer = styled.section`
  max-width: 938px;
  max-height: 605px;
  margin: 0 auto;
  padding: 0 5px;
  display: grid;
  gap: 31px 15px;
  grid-template-columns: repeat(auto-fill, minmax(218px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(285px, 1fr));

  div {
    max-width: 218px;
    max-height: 285px;
  }
  @media (max-width: 960px) {
    max-height: none;
    justify-items: center;
  }
`;
