import axios from 'axios';
import React from 'react';
import { GET_CATEGORY_URL } from '../../../../utils/constants/endpoints';

class SideBarCurrentCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCategory: null
    }
  }

  componentDidUpdate(prevProps) {
    const categoryId = this.props.params.categoryId;
    if(this.props.params !== prevProps.params){
      if(categoryId) {
        return axios(`${GET_CATEGORY_URL}${categoryId}`)
          .then(res => {
            this.setState({ currentCategory: res.data })
          })
          .catch(err => console.error(err))
      }
      this.setState({ currentCategory: null })
    }
  }

  render() {
    if(this.state.currentCategory) {
      return (        
      <div>
        <h2>{this.state.currentCategory.name}</h2>
        <p>{this.state.currentCategory.total_items_in_this_category} resultados</p>
      </div>
      )
    }
    return (
      <div>
      </div>
    );
  }
};

export default SideBarCurrentCategory;