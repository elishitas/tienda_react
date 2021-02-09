//Aside categories
import React from 'react';

const Categories = (props) => {
    return (
        <div className="aside-categories">
            <div className="categories-title">Categorías</div>
            <ul className="categories-list">
              {props.categories.map(category => (<li>{category.name}</li>))}
            </ul>
        </div>
    )
};

export default Categories; 