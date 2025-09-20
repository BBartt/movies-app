import React, { useEffect } from "react";
import { routes } from "routes/routes";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import GlobalStyles from "theme/GlobalStyle";
import StyledAppName from "components/atoms/StyledAppName/StyledAppName";
import NavBar from "components/organisms/NavBar/NavBar";
import Container from "components/organisms/Container/Container";
import Main from "components/templates/Main/Main";
import MoviesCards from "components/templates/MoviesCards/MoviesCards";
import MovieDetails from "components/organisms/MovieDetails/MovieDetails";
import Contest from "components/organisms/Contest/Contest";
import About from "components/organisms/About/About";
import Contact from "components/organisms/Contact/Contact";
import Footer from "components/organisms/Footer/Footer";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { useDispatch, useSelector } from "react-redux";
import SplashScreen from "components/common/SplashScreen";
import { fetchGenres } from "features/movies/moviesActions";

const App = () => {
  const dispatch = useDispatch();
  const isBootstrapped = useSelector((state) => state.movies.isBootstrapped);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  if (!isBootstrapped) return <SplashScreen />;

  return (
    <HashRouter>
      <>
        <GlobalStyles />
        <StyledAppName />
        <NavBar />
        <Route path={routes.movies_app} component={Container} />
        <Route path={routes.movies_app} component={Main} />

        <Switch>
          <Route
            exact
            path={routes.home}
            render={() => <Redirect to={routes.movies_app} />}
          />
          <Route path={routes.category} component={MoviesCards} />
          <Route path={routes.movieDetails} component={MovieDetails} />
          <Route path={routes.contest} component={Contest} />
          <Route path={routes.about} component={About} />
          <Route path={routes.contact} component={Contact} />
        </Switch>

        <Footer />
        <ScrollUpButton
          EasingType="easeInQuint"
          ShowAtPosition={300}
          AnimationDuration={1000}
        />
      </>
    </HashRouter>
  );
};

export default App;
