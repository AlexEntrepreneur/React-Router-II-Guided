import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Home from './components/Home';
import ItemsList from './components/ItemsList';
import Item from './components/Item';

import data from './data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoggedIn: true
    };
  }

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link className="some-link" to="/">
            <h1 className="store-header">Trinkets</h1>
          </Link>
          <div className="nav-links">
            <Link to="/">
              Home
            </Link>
            <Link className="some-link" to="/item-list">
              Shop
            </Link>
          </div>
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/" render={() => <h1>Hello from render!</h1>} />
        <Route 
          exact 
          path="/item-list" 
          render={(props) => 
            this.state.isLoggedIn 
            ? <ItemsList {...props} items={this.state.items} />
            : <Redirect to="/login" />
          } 
        />
        <Route path="/item-list/:id" render={(props) => <Item items={this.state.items} {...props} />} />
      </div>
    );
  }
}

export default App;
