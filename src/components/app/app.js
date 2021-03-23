import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";

import "./app.css";
export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 },
    ],
  };
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((el) => el.id !== id);

      return {
        todoData: newArray,
      };
    });
  };
  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };
    console.log({ text });
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };
  onToggleImportant = (id) => {
    console.log("Toggle important", id);
  };
  onToggleDone = (id) => {
    console.log("Toggle done", id);
  };
  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <AddItem onAdded={this.addItem} />
      </div>
    );
  }
}
