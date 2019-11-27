import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: table;
  border: 4px solid #8e1616;
  text-transform: uppercase;
  border-radius: 40px;
  padding: 8px 16px;
  margin-top: 20px;
  color: #8e1616;
  transition: all 0.35s ease-in-out;

  &:hover {
    text-decoration: none;
    background: #8e1616;
    color: white;
  }
`;
