import React from "react";
import GlobalStyle from "./theme/globalStyles";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Movie from "./pages/Movie";
import Discover from "./pages/Discover";
import Search from "./pages/Search";

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/search" component={Search} />
          <Route path="/">
            <Discover />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
