import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { routes } from "routes/routes";
import { pictures } from "assets/images/images";
import { StyledNavLink } from "components/atoms/StyledNavLink/StyledNavLink";
import { StyledButton } from "components/atoms/StyledButton/StyledButton";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import { StyledImg } from "components/atoms/StyledImg/StyledImg";
import Card from "components/organisms/Card/Card";

import { DECREMENT, INCREMENT, RESET } from "features/ui/uiSlice";
import { useParams } from "react-router";
import { fetchMoviesByGenre } from "features/movies/moviesActions";

const MoviesCards = () => {
  const dispatch = useDispatch();

  const { categoryId } = useParams();
  const categoryIdNum = Number(categoryId);

  const { movies, loading, error } = useSelector((state) => state.movies);
  const page = useSelector((state) => state.ui.page);

  useEffect(() => {
    dispatch(fetchMoviesByGenre(categoryIdNum, page));
  }, [categoryIdNum, page, dispatch]);

  if (error) {
    return (
      <StyledWrapper
        hasBorderRightBottom
        className="col-12 col-lg-10 my-4 mx-auto"
      >
        <StyledImg src={pictures.imageNotFound} alt="imageNotFound" />
        <StyledH1 title="true">Error! - {error}</StyledH1>
      </StyledWrapper>
    );
  }

  if (loading) {
    return (
      <StyledWrapper
        hasBorderRightBottom
        className="col-12 col-lg-10 my-4 mx-auto"
      >
        <StyledImg src={pictures.loading} alt="loading" />
        <StyledH1 title="true">Loading...</StyledH1>
        <p className="text-center">Loading... Loading... Loading...</p>
        <StyledNavLink to={routes.home}>Loading...</StyledNavLink>
      </StyledWrapper>
    );
  }

  return (
    <div className="container-fluid">
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}

      <div className="col-12 d-flex flex-column flex-md-row my-4">
        <StyledButton onClick={() => dispatch({ type: INCREMENT })}>
          &#60; PAGE {page}
        </StyledButton>

        <StyledButton
          onClick={() => dispatch({ type: RESET })}
          disabled={page === 1}
        >
          BACK TO FIRST PAGE
        </StyledButton>

        <StyledButton
          onClick={() => dispatch({ type: DECREMENT })}
          disabled={page === 1}
        >
          {page - 1} PAGE &#62;
        </StyledButton>
      </div>
    </div>
  );
};

export default MoviesCards;
