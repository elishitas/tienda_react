import React from 'react';
import { Search } from 'react-bootstrap-icons';
import { PublicationsContext } from '../../../../context/PublicationsContext';
import { withRouter } from 'react-router-dom';
import { SEARCH_RESULTS_ROUTE } from '../../../../utils/constants/routes';

class HeaderSearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      query: ''
    };
  };
  handleChange(event) {
    this.setState({ query: event.target.value })
  };
  handleSubmit(event) {
    event.preventDefault();
    const { history } = this.props;
    history.push(`${SEARCH_RESULTS_ROUTE}${this.state.query}`)
    this.setState({ query:'' })    
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          name='search'
          onChange={this.handleChange}
          value={this.state.query}
          placeholder='Buscar productos, marcas y más...'
        />
        <button type='submit'><Search /></button>
      </form>
    );
  };
}

HeaderSearchInput.contextType = PublicationsContext;

export default withRouter(HeaderSearchInput);