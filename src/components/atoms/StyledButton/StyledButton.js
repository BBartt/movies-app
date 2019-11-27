import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: ${({ displayBlock }) => (displayBlock ? "block" : "inline")};
  background-color: ${({ isBrown }) => (isBrown ? "#941309" : "#ffd829")};
  font-family: "Montserrat";
  text-transform: uppercase;
  outline: none !important;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: auto;
  width: 220px;
  height: 47px;
  padding: 0;

  ${({ secondary }) => secondary && css`
    background-color: hsl(0, 0%, 90%);
    font-size: 10px;
    width: 105px;
    height: 30px;
  `};

`;
