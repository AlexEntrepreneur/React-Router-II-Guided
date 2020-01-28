import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const goHome = () => { 
    history.push("/");
  }
  
  return (
    <div className="App">
      <nav>
        <h1 className="store-header" onClick={goHome}>Trinkets</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link className="some-link" to="/items-list">
            Shop
          </Link>
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
    </div>
  );
}

export default App;
