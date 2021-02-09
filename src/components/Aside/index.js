//aside
import React from 'react';
import Categories from './components/Categories'

const Aside = () => {
    return (
        <aside className="results-aside">
            <div className="aside-title">Notebook</div>
            <div className="aside-subtitle">42069 Resultados</div>
            <Categories />
        </aside>
    )
};

export default Aside