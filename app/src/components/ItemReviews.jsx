import React from 'react';

function ItemReviews(props) {
	return (
		<div>
			<p className="item-reviews">{props.reviews}</p>
		</div>
	);
}

export default ItemReviews;