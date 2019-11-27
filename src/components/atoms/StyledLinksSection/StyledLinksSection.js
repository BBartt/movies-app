import styled from "styled-components";

export const StyledLinksSection = styled.section`
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;

  div { text-transform: uppercase; }

  ul {
    list-style-type: none;
    padding: 0px;
    font-size: 2rem;
  }
`;
