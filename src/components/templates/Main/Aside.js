import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "routes/routes";
import { StyledImg } from "components/atoms/StyledImg/StyledImg";
import { fetchMovieCategory } from "actions";
import { StyledLinksSection } from "components/atoms/StyledLinksSection/StyledLinksSection";
import { connect } from "react-redux";

const StyledAsideWrapper = styled.aside`

  @media (max-width: 992px) {
    &:before {
      content: "";
      border-bottom: solid 2px #8e1616;
      margin-left: 3%;
      width: 94%;
      position: absolute;
      top: -1%;
      left: 0;
    }
  }

  .socials{
    a {
      text-decoration: none;
      border-radius: 40px;
      padding: 6px 10px;
      font-weight: bold;
      margin: 5px;

      &:hover{ color: white !important; }

      &:nth-child(1) {
        border: 2px solid #4267b2;
        color: #4267b2;
        &:hover { background: #4267b2; }
      }

      &:nth-child(2) {
        border: 2px solid #1da1f2;
        color: #1da1f2;
        &:hover { background: #1da1f2; }
      }

      &:nth-child(3) {
        border: 2px solid #F77737;
        color: #F77737;
        &:hover {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%););
        }
      }

      &:nth-child(4) {
        border: 2px solid #ffc200;
        color: #ffc200;
        &:hover { background: #ffc200; }
      }

    }
  }

`;

const Aside = ({ dispatch }) => (
  <StyledAsideWrapper className="text-center sticky-top">
    <section className="about">
      <h4>About</h4>
      <StyledImg
        src={"https://picsum.photos/300/300"}
        alt="picture"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        accusamus neque quia aperiam, ab? Saepe quisquam similique
        exercitationem ipsum aut excepturi sed facilis, nihil neque ipsa
        inventore laboriosam, nam quos?
      </p>
    </section>

    <section className="socials d-flex justify-content-center flex-wrap">
      <a href="https://pl-pl.facebook.com">Facebook</a>
      <a href="https://twitter.com/?lang=pl">Twitter</a>
      <a href="https://www.instagram.com">Instagram</a>
      <a href="https://www.filmweb.pl">Filmweb</a>
    </section>

    <StyledLinksSection>
      <div>catrgories:</div>
      <ul>
        <li>
          <NavLink
            onClick={() => dispatch(fetchMovieCategory("movie/popular"))}
            to={`${routes.category}/popular`}
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(fetchMovieCategory("movie/top_rated"))}
            to={`${routes.category}/top_rated`}
          >
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(fetchMovieCategory("movie/upcoming"))}
            to={`${routes.category}/upcoming`}
          >
            Upcoming
          </NavLink>
        </li>
      </ul>
    </StyledLinksSection>
  </StyledAsideWrapper>
);

const mapStateToProps = state => ({
  dispatch: state.dispatch
});

export default connect(mapStateToProps)(Aside);
