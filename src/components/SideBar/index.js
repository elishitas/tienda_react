import React from 'react'
import SideBarCurrentCategory from './components/SideBarCurrentCategory'
import CategoryList from './components/CategorysList';

const SideBar = ({ params }) => {
  return (
    <nav>
      <SideBarCurrentCategory params={params} />
      <CategoryList />  
    </nav>
  )
}

export default SideBar;