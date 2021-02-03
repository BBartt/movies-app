import React, { Component } from "react";
import Aside from "./Aside";
import { StyledButton } from "components/atoms/StyledButton/StyledButton";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import { MORE_POSTS, fetchMovieCategory } from "actions";
import Card from "components/organisms/Card/Card";
import { connect } from "react-redux";

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovieCategory("movie/upcoming"));
  }

  render() {
    const { dispatch, morePosts, movies } = this.props;

    return (
      <StyledWrapper
        as="main"
        className="container d-flex flex-wrap col-11 col-lg-10 mb-5"
      >
        <div className="col-12 col-lg-8">
          <StyledH1 title="true">Upcoming movies</StyledH1>

          {movies.slice(0, morePosts).map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}

          <StyledButton
            onClick={() => dispatch({ type: MORE_POSTS })}
            displayBlock
          >
            \/ see more \/
          </StyledButton>
        </div>

        <div className="col-12 col-lg-4 mt-5">
          <Aside />
        </div>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  morePosts: state.morePosts
});

export default connect(mapStateToProps)(Main);
