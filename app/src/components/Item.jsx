import React from "react";
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";
import { Route, NavLink, useParams, Redirect } from "react-router-dom";

// import items from "../data";

function Item(props) {
  const { itemId } = useParams();
  const item = props.items.find(item => item.id.toString() === itemId);

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <NavLink exact to={`/items-list/${item.id}`}>
          Description
        </NavLink>
        <NavLink to={`/items-list/${item.id}/shipping`}>
          Shipping
        </NavLink>
      </nav>
      <Route exact path="/items-list/:id">
        <ItemDescription item={item} />
      </Route>
      <Route path="/items-list/:id/shipping">
        <ItemShipping item={item} />
      </Route>
    </div>
  );
}

export default Item;
