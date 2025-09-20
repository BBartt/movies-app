import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "routes/routes";
import { fetchGenres, fetchMoviesByGenre } from "features/movies/moviesActions";
import { RESET_MORE_POSTS } from "features/ui/uiSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StyledNavbarWrapper = styled(Navbar)`
  font-size: 2rem;
  padding: 15px;
`;

const NavBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const movieGenreInfo = useSelector((state) => state.movies.movieGenreInfo);
  const changePlaceholder = useSelector((state) => state.ui.changePlaceholder);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!changePlaceholder) {
      value.toLowerCase() === "marshall mathers"
        ? alert(`Congratulations --> ${value} <-- it is correnct answer`)
        : alert(`Answer --> ${value} <-- is not correnct, try again`);
      setValue("");
      return;
    }

    window.open(
      `https://www.themoviedb.org/search?query=${value}&language=en-US`
    );
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const genresFound = movieGenreInfo?.map((item) => (
    <NavDropdown.Item key={item.id} as={NavLink} to={`category/${item.id}`}>
      {item.name}
    </NavDropdown.Item>
  ));

  const genresNotFound = <li>GENRES NOT FOUND</li>;

  return (
    <StyledNavbarWrapper bg="dark" variant="dark" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to={routes.movies_app}
            onClick={() => dispatch({ type: RESET_MORE_POSTS })}
          >
            Home
          </Nav.Link>

          <NavDropdown title="Movie Genres" id="basic-nav-dropdown">
            {movieGenreInfo.length ? genresFound : genresNotFound}
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to={routes.contest}>
              contest
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={NavLink} to={routes.about}>
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.contact}>
            Contact
          </Nav.Link>
        </Nav>

        <Form inline className="col-5" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder={
              changePlaceholder
                ? "Search in themoviedb database"
                : "type name and surname here please"
            }
            className="mr-sm-2 col-8"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </StyledNavbarWrapper>
  );
};

export default NavBar;
