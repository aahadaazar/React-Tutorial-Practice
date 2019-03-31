import React, { Component } from 'react'

export class SearchBar extends Component {
  state = { term: '' };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <label>{this.state.term}</label> */}
            <input type="text" value={this.state.term} onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    )
  }
  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({ term: event.target.value})
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  }
}

export default SearchBar
