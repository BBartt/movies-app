import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  border-radius: 5px;
  max-height: 700px;
  height: 100%;
  width: 100%;

  ${({ floatRight }) => floatRight && css` float: right; `};

  ${({ floatLeft }) =>  floatLeft && css`  float: left; `};

  ${({ imdb }) => imdb && css` height: 30px; width: 70px; `};

`;
