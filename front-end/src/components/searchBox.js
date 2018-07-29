import React, { Component } from 'react';

class SearchBox extends Component {

  constructor() {
    super();
    this.state = { value: ""};
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.searchQuery(event);
    // or add in alternative functionality for the on onSubmit
    // might not need to have handleChange
  }

  render() {
    return (
      <form className='search-box' onSubmit={() => this.handleSubmit(event)}>
        <input onChange={ event => this.handleChange(event) } />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBox;
