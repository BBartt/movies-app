// import React, { Component } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

import Aside from "./Aside";
import { StyledButton } from "components/atoms/StyledButton/StyledButton";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import Card from "components/organisms/Card/Card";
import { fetchMoviesByCategory } from "features/movies/moviesActions";
import { MORE_POSTS } from "features/ui/uiSlice";

const Main = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const morePosts = useSelector((state) => state.ui.morePosts);

  useEffect(() => {
    dispatch(fetchMoviesByCategory("movie/upcoming"));
  }, [dispatch]);

  if (!movies.length > 0) return null;

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
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  morePosts: state.morePosts,
});

export default connect(mapStateToProps)(Main);
