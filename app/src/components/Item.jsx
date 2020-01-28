import React from "react";
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";
import { Route, NavLink, useParams, Redirect } from "react-router-dom";

// import items from "../data";

function Item(props) {
  const { itemId } = useParams();
  const item = props.items.find(item => item.id.toString() === itemId);
  
  return (
    item ?
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
        <NavLink exact to={`/items-list/${item.id}`} replace>
          Description
        </NavLink>
        <NavLink to={`/items-list/${item.id}/shipping`} replace>
          Shipping
        </NavLink>
        <NavLink to={`/items-list/${item.id}/reviews`} replace>
          Reviews
        </NavLink>
      </nav>
      <Route exact path="/items-list/:id">
        <ItemDescription description={item.description} />
      </Route>
      <Route path="/items-list/:id/shipping">
        <ItemShipping shipping={item.shipping} />
      </Route>
      <Route path="/items-list/:id/reviews">
        <p>Some reviews go here</p>
      </Route>
    </div> : null
  );
}

export default Item;
