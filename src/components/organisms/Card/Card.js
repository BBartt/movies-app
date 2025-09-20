import React from "react";
import { useDispatch } from "react-redux";
import { StyledNavLink } from "components/atoms/StyledNavLink/StyledNavLink";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import { StyledImg } from "components/atoms/StyledImg/StyledImg";
import { pictures } from "assets/images/images";
import { TMDB_IMAGE_BASE_URL } from "constants";
import { buildDetailsPath, joinImageUrl } from "utils";
import { routes } from "routes/routes";
import { fetchMovieDetails } from "features/movies/moviesActions";

const Card = ({ movie }) => {
  const dispatch = useDispatch();
  const {
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    backdrop_path,
    poster_path,
    id,
  } = movie;

  const imageUrl =
    joinImageUrl(TMDB_IMAGE_BASE_URL, backdrop_path) ??
    joinImageUrl(TMDB_IMAGE_BASE_URL, poster_path) ??
    pictures.imageNotFound;

  return (
    <StyledWrapper
      className="col-12 col-lg-10 my-4 mx-auto"
      hasBorderRightBottom
    >
      <StyledImg src={imageUrl} alt={title} />
      <StyledH1 title="true">{title}</StyledH1>
      <StyledH1>RELEASE DATE: {release_date}</StyledH1>
      <StyledH1>RATING: {Number(vote_average).toFixed(1)} / 10</StyledH1>
      <figcaption>{overview}</figcaption>

      <StyledNavLink
        to={buildDetailsPath(routes.home, original_title)}
        onClick={() => dispatch(fetchMovieDetails(id))}
      >
        Read More
      </StyledNavLink>
    </StyledWrapper>
  );
};

export default Card;
