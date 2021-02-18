// creando context -> cartContext 
import React from 'react'

export const PublicationsContext = React.createContext()

class PublicationsContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.setPublications = this.setPublications.bind(this);
    this.state = {
      publications: [],
      setPublications: this.setPublications
    };
  };

  setPublications(publications) {
    this.setState({ publications });
  };

  render() {
    return(
      <PublicationsContext.Provider value={this.state}>
        {this.props.children}
      </PublicationsContext.Provider>
    );
  };
};

export default PublicationsContextProvider;