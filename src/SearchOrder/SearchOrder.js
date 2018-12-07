import React, { Component } from 'react';
import './SearchOrder.css'
import { Redirect } from 'react-router'

class SearchOrder extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      redirect: false
    }
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(event) {
    this.setState({id: event.target.value})
  }

  handleSubmit(event) {
    this.setState({redirect: true});
    event.preventDefault();
  }

  render() {

    if (this.state.redirect === true) {
      return <Redirect to={'/order/' + this.state.id} />
    }

    return (
      <div className="searchOrder-div">
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <h2>
            Order Number
        </h2>
        <div className="search-form">
        <input className="form-control" type="text" value={this.state.id} onChange={this.handleIdChange} placeholder="Search" aria-label="Search"/>
        </div>
        <button class="btn btn:hover" type="submit">Search</button>
      </form>
      </div>
    );
  }
}

export default SearchOrder;
