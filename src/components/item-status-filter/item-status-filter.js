import React, { Component } from "react";

import "./item-status-filter.css";
export default class ItemStatusFilter extends Component {
  state = {
    done: false,
    // show: false,
  };
  onDoneClick = (e) => {
    e.preventDefault();
    this.setState({
      done: e.target.done,
    });
    this.props.onDoneFilter(this.state.done);
  };

  onActiveClick = (e) => {
    e.preventDefault();
    this.setState({
      done: e.target.done,
    });
    this.props.onActiveFilter(this.state.done);
  };
  onAllClick = (e) => {
    e.preventDefault();
    this.setState({
      done: e.target.done,
    });
    this.props.onAllFilter(this.state.done);
  };
  render() {
    // const { show } = this.props;

    // let classNames = "btn btn-outline-secondary";
    // if (show) {
    //   classNames += " btn-info";
    // }
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-secondary btn-info"
          onClick={this.onAllClick}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.onActiveClick}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.onDoneClick}
        >
          Done
        </button>
      </div>
    );
  }
}
// const ItemStatusFilterfunc = () => {
//   return (
//     <div className="btn-group">
//       <button type="button" className="btn btn-info">
//         All
//       </button>
//       <button type="button" className="btn btn-outline-secondary">
//         Active
//       </button>
//       <button type="button" className="btn btn-outline-secondary">
//         Done
//       </button>
//     </div>
//   );
// };

///
