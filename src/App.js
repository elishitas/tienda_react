import React from 'react';
import './App.css';
import Header from './components/Header';
//Esto esta igual en el mio

import { HOME_PAGE_ROUTE, CATEGORY_PAGE_ROUTE, ITEM_PAGE_ROUTE, SEARCH_RESULTS_PAGE_ROUTE } from './utils/constants/routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

import PublicationsContextProvider from './context/PublicationsContext';


const App = () => {
  return (
    <PublicationsContextProvider>
      <div>
          <BrowserRouter>
            <Header />
            <main>
              <Switch>
                <Route path={HOME_PAGE_ROUTE} component={Home} exact />
                <Route path={CATEGORY_PAGE_ROUTE} component={Home} exact />
                <Route path={SEARCH_RESULTS_PAGE_ROUTE} component={Home} exact />
                <Route path={ITEM_PAGE_ROUTE} component={ProductDetail} exact />
              </Switch>
            </main>
          </BrowserRouter>
      </div>
    </PublicationsContextProvider>
  );
};  

export default App;
