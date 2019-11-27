import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "routes/routes";
import {
  fetchMoviesGenresForNavBar,
  fetchMoviesByGenre,
  RESET_MORE_POSTS
} from "actions";
import { connect } from "react-redux";

const StyledNavbarWrapper = styled(Navbar)`
  font-size: 2rem;
  padding: 15px;
`;

class NavBar extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    this.props.dispatch(fetchMoviesGenresForNavBar());
  }

  handleSubmit = e => {
    e.preventDefault();
    let { value } = this.state;
    let { changePlaceholder } = this.props;

    if (!changePlaceholder) {
      value.toLowerCase() === "marshall mathers"
        ? alert(`Congratulations --> ${value} <-- it is correnct answer`)
        : alert(`Answer --> ${value} <-- is not correnct, try again`);
      this.setState({ value: "" });
      return;
    }

    window.open(
      `https://www.themoviedb.org/search?query=${value}&language=en-US`
    );
    this.setState({ value: "" });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { movieGenreInfo, dispatch } = this.props;
    const genresFound = movieGenreInfo.map(item => (
      <NavDropdown.Item
        key={item.id}
        as={NavLink}
        to={`${routes.category}/${item.id}`}
        onClick={() => dispatch(fetchMoviesByGenre(item))}
      >
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

          <Form inline className="col-5" onSubmit={this.handleSubmit}>
            <FormControl
              type="text"
              placeholder={
                this.props.changePlaceholder
                  ? "Search in themoviedb database"
                  : "type name and surname here please"
              }
              className="mr-sm-2 col-8"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </StyledNavbarWrapper>
    );
  }
}

const mapStateToProps = state => ({
  movieGenreInfo: state.movieGenreInfo,
  changePlaceholder: state.changePlaceholder,
  dispatch: state.dispatch
});

export default connect(mapStateToProps)(NavBar);
