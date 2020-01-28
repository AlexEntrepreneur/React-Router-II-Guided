import React from 'react';
import { useParams, Route, Link } from 'react-router-dom';

import items from '../data';
import ItemDescription from './ItemDescription';
import ItemShipping from './ItemShipping';

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
          <Link to={`/items-list/${item.id}`}>
            Description
          </Link>
          <Link to={`/items-list/${item.id}/shipping`}>
            Shipping
          </Link>
        </nav>
			</div>
			<Route exact path={`/items-list/${item.id}`}>
        <ItemDescription description={item.description} />
      </Route>
			<Route path={`/items-list/${item.id}/shipping`}>
        <ItemShipping shipping={item.shipping} />
      </Route>
		</div>
	);
}

export default Item;
