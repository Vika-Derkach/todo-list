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
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",

    // todoForShow: this.todoData,
  };
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((el) => el.id !== id);

      return {
        todoData: newArray,
      };
    });
  };
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    //2. construct new array
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }
  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    console.log({ text });
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  searchThings = (label) => {
    this.setState(({ todoData }) => {
      // const todoDataCopy = [...todoData];
      const newSearchArr = todoData.filter((el) => el.label.includes(label));

      return {
        todoData: newSearchArr,
      };
    });
  };
  onDoneFilter = (done) => {
    this.setState(({ todoData }) => {
      const newDoneArr = todoData.filter((el) => el.done === true);

      return {
        todoData: newDoneArr,
      };
    });
  };
  onActiveFilter = (done) => {
    this.setState(({ todoData }) => {
      const newActiveArr = todoData.filter((el) => el.done === false);

      return {
        todoData: newActiveArr,
      };
    });
  };
  onAllFilter = (done) => {
    this.setState(({ todoData }) => {
      const newAllArr = todoData.sort();

      return {
        todoData: newAllArr,
      };
    });
  };
  //поиск з ним
  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  onSearchChange = (term) => {
    this.setState({ term });
  };
  render() {
    const { todoData, term } = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    console.log({ todoData });
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            onAllFilter={this.onAllFilter}
            onActiveFilter={this.onActiveFilter}
            onDoneFilter={this.onDoneFilter}
          />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <AddItem onAdded={this.addItem} />
      </div>
    );
  }
}
