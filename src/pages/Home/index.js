import React from 'react';
import ProductsWrapper from '../../components/ProductsWrapper';
import SideBar from '../../components/SideBar';

const Home = ({ match, history }) => {
  return (
    <React.Fragment>
      <SideBar params={match.params} />
      <ProductsWrapper history={history} params={match.params} />
    </React.Fragment>    
  );
};

export default Home;