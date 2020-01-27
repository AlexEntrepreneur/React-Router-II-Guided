import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ItemsList from './components/ItemsList';
import Item from './components/Item';

function App() {
	return (
		<div className="App">
			<nav>
				<Link to="/">
					<h1 className="store-header">Trinkets</h1>
				</Link>
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
