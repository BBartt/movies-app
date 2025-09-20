import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "routes/routes";
import { pictures } from "assets/images/images";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";
import { StyledSpan } from "components/atoms/StyledSpan/StyledSpan";
import { StyledImg } from "components/atoms/StyledImg/StyledImg";
import {
  fetchMovieDetails,
  fetchNowPlayingMovies,
} from "features/movies/moviesActions";
import { useDispatch, useSelector } from "react-redux";

const StyledContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
`;

const StyledArticle = styled.article`
  position: relative;

  &:hover figcaption {
    opacity: 0.8;
  }

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  @media (max-width: 991px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    &:nth-child(1) {
      grid-column: 1 / 5;
      grid-row: 1 / 3;
    }

    &:nth-child(2) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
    &:nth-child(3) {
      grid-column: 3 / 5;
      grid-row: 3 / 4;
    }

    &:nth-child(4) {
      grid-column: 1 / 3;
      grid-row: 4 / 4;
    }

    &:nth-child(5) {
      grid-column: 3 / 5;
      grid-row: 4 / 4;
    }
  }
`;

const StyedFigcaption = styled.figcaption`
  position: absolute;
  bottom: 0px;
  left: 0px;

  transition: opacity 0.4s ease-in-out;
  background-color: #738583;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 600;
  display: block;
  color: black;
  width: 100%;
  opacity: 0;
`;

const Container = () => {
  const dispatch = useDispatch();
  const movies_now_playing = useSelector(
    (state) => state.movies.moviesNowPlaying
  );

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, [dispatch]);

  return (
    <StyledWrapper className="container col-12 col-lg-11 my-5">
      <StyledH1 title="title">Movies Now Playing</StyledH1>

      <StyledContainerWrapper>
        {movies_now_playing?.slice(0, 5).map((movie) => (
          <StyledArticle key={movie.id}>
            <NavLink
              to={
                routes.home +
                `movieDetails/${encodeURIComponent(movie.original_title)}`
              }
              onClick={() => dispatch(fetchMovieDetails(movie.id))}
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
            </NavLink>
            <NavLink
              to={
                routes.home +
                `movieDetails/${encodeURIComponent(movie.original_title)}`
              }
              onClick={() => dispatch(fetchMovieDetails(movie.id))}
            >
              <StyedFigcaption>
                {movie.title} | User Rating: {movie.vote_average}/10
                {movie.adult && <StyledSpan> | FOR ADULTS</StyledSpan>}
              </StyedFigcaption>
            </NavLink>
          </StyledArticle>
        ))}
      </StyledContainerWrapper>
    </StyledWrapper>
  );
};

export default Container;
