import React from "react";
import styled from "styled-components";
import { pictures } from "assets/images/images";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import { StyledImg } from "components/atoms/StyledImg/StyledImg";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";
import { connect } from "react-redux";

const StykedMovieWrapper = styled(StyledWrapper)`
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: column;

  .movieNumbers div, figcaption{
    border-right: 2px solid brown;
    border-left: 2px solid brown;
    padding: 0px 10px;
  }

  .movieNumbers{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (min-width: 992px) { flex-direction: row; }
  }

  .wrapper{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .details{
      ul{
        padding: 0;
        margin: 0;
        li{
          border-bottom: 2px solid brown;
          list-style-type: none;
          width: fit-content;
        }
      }
    }

    .links{ margin-top: 40px; }

    @media (min-width: 768px) { flex-direction: row; }

  }

`;

const MoviesDetails = ({ movieInfo }) => {
  return (
    <StykedMovieWrapper hasBorderRightBottom className="container col-12 col-lg-10 my-4 mx-auto">
      <StyledImg
        src={(() => {
          if (movieInfo.backdrop_path) {
            return `https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`;
          } else if (movieInfo.poster_path) {
            return `https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`;
          } else { return pictures.imageNotFound; }
        })()}
        alt={movieInfo.original_title}
      />
      {movieInfo.length !== 0 &&
        (<>
          <StyledH1 title="true">{movieInfo.title}</StyledH1>
          <section className="movieNumbers my-4">
            <div>Runtime: {movieInfo.runtime} min</div>
            <div>Release Date: {movieInfo.release_date}</div>
            <div>Vote Average: {movieInfo.vote_average}</div>
            <div>Vote Count: {movieInfo.vote_count}</div>
          </section>
          <figcaption className="my-4">{movieInfo.overview}</figcaption>
          <section className="wrapper">
            <section className="details">
              <h2>Details:</h2>
              <ul>
                <li>Original Title: {movieInfo.original_title}</li>
                <li>Budget: {movieInfo.budget}</li>
                <li>Original Language: {movieInfo.original_language}</li>
                <li>Popularity: {movieInfo.popularity}</li>
              </ul>
            </section>
            <section className="links">
              <h2>Links:</h2>
              <a href={`https://www.imdb.com/title/${movieInfo.imdb_id}`}>
                SEE MORE ON <StyledImg imdb src={pictures.imdb} alt="imdb" /> SITE
              </a>
              {movieInfo.homepage && (
                <>
                  <div> OR </div>
                  <a href={movieInfo.homepage}>VISIT HOMEPAGE</a>
                </>
              )}
            </section>
          </section>
        </>)
      }
    </StykedMovieWrapper>
  );
};

const mapStateToProps = state => ({
  movieInfo: state.movieInfo
});

export default connect(mapStateToProps)(MoviesDetails);
