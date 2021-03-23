// import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./add-item.css";
export default class AddItem extends Component {
  render() {
    const { onAdded } = this.props;

    return (
      <div className="add-item d-flex">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => onAdded("hello world")}
        >
          add-item
        </button>
      </div>
    );
  }
}
