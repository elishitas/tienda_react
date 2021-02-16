import React from 'react';
import { Link } from 'react-router-dom';
import { GET_CATEGORIES_URL } from '../../../../utils/constants/endpoints';
import { CATEGORY_ROUTE } from '../../../../utils/constants/routes';
import axios from 'axios';

class CategoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios(GET_CATEGORIES_URL)
      .then(res => this.setState({categories: res.data}))
      .catch(err => console.error(err))
  }
  
  render() {    
    return (
      <div>
        <h4>Categorías</h4>
        <ul>
          {this.state.categories.map(category => 
            <li key={category.id}>
              <Link to={`${CATEGORY_ROUTE}${category.id}`} >{category.name}</Link>
            </li>
          )}
        </ul>
      </div>  
    )
  }
};

export default CategoryList;