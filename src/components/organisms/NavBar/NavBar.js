import React, { useEffect, useState, useCallback, useMemo } from "react";
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
import { fetchGenres } from "features/movies/moviesActions";
import { RESET_MORE_POSTS } from "features/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const StyledNavbarWrapper = styled(Navbar)`
  font-size: 2rem;
  padding: 15px;
`;

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const movieGenreInfo = useSelector((state) => state.movies.movieGenreInfo);
  const changePlaceholder = useSelector((state) => state.ui.changePlaceholder);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!changePlaceholder) {
        const isCorrect =
          searchValue.trim().toLowerCase() === "marshall mathers";
        alert(
          isCorrect
            ? `Congratulations --> ${searchValue} <-- it is correct answer`
            : `Answer --> ${searchValue} <-- is not correct, try again`
        );
        setSearchValue("");
        return;
      }

      window.open(
        `https://www.themoviedb.org/search?query=${encodeURIComponent(
          searchValue
        )}&language=en-US`
      );
      setSearchValue("");
    },
    [searchValue, changePlaceholder]
  );

  const handleChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const genresDropdownItems = useMemo(() => {
    if (!movieGenreInfo || !movieGenreInfo.length) {
      return <li>GENRES NOT FOUND</li>;
    }
    return movieGenreInfo.map((item) => (
      <NavDropdown.Item key={item.id} as={NavLink} to={`/category/${item.id}`}>
        {item.name}
      </NavDropdown.Item>
    ));
  }, [movieGenreInfo]);

  const placeholderText = changePlaceholder
    ? "Search in themoviedb database"
    : "type name and surname here please";

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
            {genresDropdownItems}
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to={routes.contest}>
              Contest
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={NavLink} to={routes.about}>
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.contact}>
            Contact
          </Nav.Link>
        </Nav>

        <Form className="col-5 d-flex" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder={placeholderText}
            className="mr-sm-2 col-8"
            value={searchValue}
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
