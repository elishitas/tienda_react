//logo
import React from 'react';
import logoML from '../../logoML.png';

const HeaderLogo = () => {
  return (
    <figure>
      <img className='logo-header' src={logoML} alt="Logo de Mercado Libre"/>
    </figure>
  )
};

export default HeaderLogo;