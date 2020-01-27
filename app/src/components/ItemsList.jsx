import React from 'react';
import { Link } from 'react-router-dom';

import data from '../data';

function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // An API request could go here to get the list of items
    setItems(data);
  });

	return (
		<div className="items-list-wrapper">
			{items.map(item => (
				<Link className="some-link" to={`/items-list/${item.id}`} key={item.id}>
					<div className="item-card">
						<img
							className="item-list-image"
							src={item.imageUrl}
							alt={item.name}
						/>
						<p>{item.name}</p>
						<p>${item.price}</p>
					</div>
				</Link>
			))}
		</div>
	);
}

export default ItemsList;
