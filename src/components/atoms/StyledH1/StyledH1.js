import styled, { css } from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 2rem;

  ${({ title }) => title && css`
    border-bottom: 2px solid #c7c7c7;
    border-top: 2px solid #c7c7c7;
    text-transform: capitalize;
    text-align: center;
    margin-top: 10px;
    font-size: 4rem;
    &::first-letter {
      font-weight: 600;
      color: brown;
    }
  `};

`;
