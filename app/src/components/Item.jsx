import React from 'react';
import ItemDescription from './ItemDescription';
import ItemShipping from './ItemShipping';
import { Route } from 'react-router-dom';

import items from '../data';

function Item(props) {
    const item = items.find(item => item.id.toString() === props.match.params.id);

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
            </nav>
            <Route
                exact
                path="/item-list/:id" 
                render={(props) => <ItemDescription {...props} item={item} />}
            />
            <Route 
                path="/item-list/:id/shipping" 
                render={(props) => <ItemShipping {...props} item={item} />}
            />
        </div>
    );
}

export default Item;
