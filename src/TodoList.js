import React, { useEffect, useState } from "react";
import { todoListState } from "./AtomState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import { useRecoilValue } from "recoil";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
