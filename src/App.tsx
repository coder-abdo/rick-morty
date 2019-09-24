import * as React from "react";
import Home from "./Home";
import Favorites from "./Favorites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "./Store";
import Nav from "./Nav";
const App: React.FC = (): JSX.Element => {
  const { state } = React.useContext(Store);

  //console.log(state);
  return (
    <div className="container">
      <h1 className="text-center text-success mt-2 title">Rick &amp; Morty</h1>
      <h2 className="text-center text-info mt-2 subtitle">
        Pick Your Favorite Episode
      </h2>
      <h2 className="favorite text-right text-capitalize text-info mt-2">
        favorites:{state.favorites.length}
      </h2>

      <Router>
        <Nav />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Favorites} path="/favs" exact />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
