import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE_ROUTE } from '../../utils/constants/routes';
import HeaderLogo from '../HeaderLogo';
import HeaderSearchInput from './components/HeaderSearchInput';

const Header = (props) => {
  return (    
    <header>
      <div className='container'>
        <Link to={HOME_PAGE_ROUTE}>
          <HeaderLogo />
        </Link>
        <HeaderSearchInput />
      </div>
    </header>
  )
};

export default Header;