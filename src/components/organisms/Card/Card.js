import React from "react";
import { StyledNavLink } from "components/atoms/StyledNavLink/StyledNavLink";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import { StyledImg } from "components/atoms/StyledImg/StyledImg";
import { fetchMovieInfo } from "actions";
import { routes } from "routes/routes";
import { pictures } from "assets/images/images";
import { connect } from "react-redux";

const Card = ({ movie, dispatch }) => (
  <StyledWrapper
    className="col-12 col-lg-10 my-4 mx-auto"
    key={movie.title}
    hasBorderRightBottom
  >
    <StyledImg
      src={(() => {
        if (movie.backdrop_path) {
          return `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
        } else if (movie.poster_path) {
          return `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
        } else {
          return pictures.imageNotFound;
        }
      })()}
      alt={movie.backdrop_path}
    />
    <StyledH1 title="true">{movie.title}</StyledH1>
    <StyledH1>RELEACE DATE: {movie.release_date}</StyledH1>
    <StyledH1>RATING: {movie.vote_average} / 10</StyledH1>
    <figcaption>{movie.overview}</figcaption>

    <StyledNavLink
      to={
        routes.home + `movieDetails/${encodeURIComponent(movie.original_title)}`
      }
      onClick={() => dispatch(fetchMovieInfo(movie.id))}
    >
      Read More
    </StyledNavLink>
  </StyledWrapper>
);

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Card);
