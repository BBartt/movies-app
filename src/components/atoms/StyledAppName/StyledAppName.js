import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "routes/routes";

const StyledAppName = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 700;
  margin: 0px auto;
  font-size: 5rem;
  padding: 10px;
  color: brown;
  &:hover { text-decoration: none; }
`;

const Header = () => (
  <StyledAppName to={routes.movies_app}>Movies app</StyledAppName>
);

export default Header;
