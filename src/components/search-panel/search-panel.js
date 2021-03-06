import React, { Component } from "react";

import "./search-panel.css";
export default class SearchPanel extends Component {
  // state = {
  //   label: "",
  // };
  // onSearchChange = (e) => {
  //   this.setState({
  //     label: e.target.value,
  //   });
  // };
  // onSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.onSearch(this.state.label);
  //   // this.setState({
  //   //   label: "",
  //   // });
  // };
  // onSearchChange = (e) => {
  //   console.log(e.target.value);
  // };
  //його
  state = {
    term: "",
  };
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      // <form onSubmit={this.onSubmit}>
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={this.state.term}
      />
      // </form>
    );
  }
}
