//Aside categories
import React from 'react';

const Categories = (props) => {

    const existCategories = props.categories.lenght > 0;

    return (
        <div className="aside-categories">
            <div className="categories-title">Categorías</div>
            <ul className="categories-list">
              {props.categories.map(category => (<li>{category.name}</li>))}
              :
              <p>No existen categrias</p>
            </ul>
        </div>
    )
};

export default Categories; 