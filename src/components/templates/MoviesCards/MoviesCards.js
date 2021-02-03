import React, { useEffect, useRef } from "react";
import { routes } from "routes/routes";
import { pictures } from "assets/images/images";
import { StyledNavLink } from "components/atoms/StyledNavLink/StyledNavLink";
import { StyledButton } from "components/atoms/StyledButton/StyledButton";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import { StyledImg } from "components/atoms/StyledImg/StyledImg";
import {
  INCREMENT,
  DECREMENT,
  RESET,
  APIKEY,
  baseURL,
  fetchNewPageSuccess
} from "actions";
import { connect } from "react-redux";
import Card from "components/organisms/Card/Card";

const MoviesCards = ({ loading, error, movies, movieGenreNumber, page, dispatch }) => {
  const isFirstRun = useRef(true);
  useEffect(
    () => {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        // console.log( "first render of use efect, it not supposed to run on load new page" );
        return;
      }
      fetch( baseURL + `discover/movie${APIKEY}&with_genres=${movieGenreNumber}&page=${page}` )
        .then(res => res.json())
        .then(items => dispatch(fetchNewPageSuccess(items)));
      // console.log("new rendedr of use effect when button is clicked");
    },
    [page]
  );

  if (error) {
    return(
      <StyledWrapper hasBorderRightBottom className="col-12 col-lg-10 my-4 mx-auto">
        <StyledImg src={pictures.imageNotFound} alt="imageNotFound" />
        <StyledH1 title="true">Error! - {error}</StyledH1>
      </StyledWrapper>
    );
  } else if (loading) {
    return (
      <StyledWrapper hasBorderRightBottom className="col-12 col-lg-10 my-4 mx-auto">
        <StyledImg src={pictures.loading} alt="loading" />
        <StyledH1 title="true">Loading...</StyledH1>
        <p className="text-center">Loading... Loading... Loading...</p>
        <StyledNavLink to={routes.home}>Loading...</StyledNavLink>
      </StyledWrapper>
    );
  } else {
    return(
      <div className="container-fluid">
        {movies.map((movie, index) => ( <Card key={index} movie={movie} /> ))}

        <div className="col-12 d-flex flex-column flex-md-row my-4">
          <StyledButton onClick={() => dispatch({ type: INCREMENT })}>
            &#60; PAGE {page}
          </StyledButton>

          <StyledButton onClick={() => dispatch({ type: RESET })} disabled={page === 1}>
            BACK TO FIRST PAGE
          </StyledButton>

          <StyledButton onClick={() => dispatch({ type: DECREMENT })} disabled={page === 1}>
            {page - 1} PAGE &#62;
          </StyledButton>
        </div>
      </div>
    )
  };
};

const mapStateToProps = state => ({
  movies: state.movies,
  loading: state.loading,
  error: state.error,
  page: state.page,
  movieGenreNumber: state.movieGenreNumber
});

export default connect(mapStateToProps)(MoviesCards);
