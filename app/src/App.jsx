import React, { useState, useEffect } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";

import data from "./data";

function App() {
  const [items, setItems] = useState([]);
  const [isLoggedIn] = useState(true);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="App">
      <nav>
        <Link className="some-link" to="/">
          <h1 className="store-header">Trinkets</h1>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link className="some-link" to="/items-list">
            Shop
          </Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/items-list">
          {isLoggedIn ? (
            <ItemsList items={items} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/items-list/:itemId">
          <Item items={items} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
