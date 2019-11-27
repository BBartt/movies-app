import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  border: 2px solid #e0c1c1;
  background-color: #f1efdf;
  border-radius: 5px;
  padding: 30px;

  ${({ hasBorderRightBottom }) =>
    hasBorderRightBottom && css`
      border-bottom: 6px solid brown;
      border-right: 6px solid brown;
  `};
`;
