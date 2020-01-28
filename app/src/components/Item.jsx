import React from 'react';
import { useParams, Route, NavLink } from 'react-router-dom';

import items from '../data';
import ItemDescription from './ItemDescription';
import ItemShipping from './ItemShipping';
import ItemReviews from './ItemReviews';

function Item() {
  const { itemId } = useParams();
	const item = items.find(item => item.id.toString() === itemId);

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
			<div>
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
			</div>
			<Route exact path={`/items-list/${item.id}`}>
        <ItemDescription description={item.description} />
      </Route>
			<Route path={`/items-list/${item.id}/shipping`}>
        <ItemShipping shipping={item.shipping} />
      </Route>
      <Route path={`/items-list/${item.id}/reviews`}>
        <ItemReviews reviews={'hello from reviews'} />
      </Route>
		</div>
	);
}

export default Item;
