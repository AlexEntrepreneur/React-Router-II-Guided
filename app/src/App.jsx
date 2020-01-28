import React from "react";
import { Route, NavLink, useHistory } from "react-router-dom";
import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import TestingRender from "./components/TestingRender";

function App() {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="App">
      <nav>
        <h1 className="store-header" onClick={goHome}>
          Trinkets
        </h1>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink className="some-link" to="/items-list">
            Shop
          </NavLink>
        </div>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/items-list">
        <ItemsList />
      </Route>
      <Route path="/items-list/:itemId">
        <Item />
      </Route>
      {/* The older syntax */}
      <Route
        path="/test"
        render={props => <TestingRender {...props} customProps={"Hello!"} />}
      />
    </div>
  );
}

export default App;
