import React, { useEffect } from "react";
import Header from "./elements/Header";
import MovieHome from "./MovieHome";
import TVHome from "./TVHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Movie from "./Movie";
import TVShows from "./TVShows";
import NotFound from "./NotFound";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import Login from "./Login";

const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run when the app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in OR th euser was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Header />
          <MovieHome />
        </Route>
        <Route path="/tvshows" exact>
          <Header />
          <TVHome />
        </Route>
        <Route path="/login" exact component={Login} />
        <Route
          path="/:movieId"
          exact
          render={(props) => (
            <div>
              <Header />
              <Movie {...props} />
            </div>
          )}
        />
        <Route
          path="/tvshows/:tvshowId"
          exact
          render={(props) => (
            <div>
              <Header />
              <TVShows {...props} />
            </div>
          )}
        />
        <Route path={"*"} component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
