import React from 'react';
import ProductsWrapper from '../../components/ProductsWrapper';
//import SideBar from '../../components/SideBar';

const Home = ({ match, history }) => {
  return (
    <React.Fragment>

      <ProductsWrapper history={history} params={match.params} />
    </React.Fragment>    
  );
};

export default Home;