import React from 'react';
import { useParams } from 'react-router-dom';

import items from '../data';

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
				{/* Add subnav here */}
				<p className="item-description">{item.description}</p>
			</div>
			{/* Add subroutes here */}
		</div>
	);
}

export default Item;
