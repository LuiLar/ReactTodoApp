"use client";

import { createContext, useEffect, useState } from "react";
import { type Todo } from "../types";

interface TodosContextType {
  todos: Todo[];
  currentTask: string;
  setCurrentTask: (task: string) => void;
  addNewTodoHandler: () => void;
  completeTodoAt: (index: number) => void;
  removeTodoAt: (index: number) => void;
}

const TodosContext = createContext<TodosContextType>({
  todos: [],
  currentTask: "",
  setCurrentTask: () => {},
  addNewTodoHandler: () => {},
  completeTodoAt: () => {},
  removeTodoAt: () => {},
});

const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTask, setCurrentTask] = useState<string>("");
  const [todos, addTodo] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("./api/todos")
      .then((res) => res.json())
      .then((fetchedTodos) => addTodo(fetchedTodos))
      .catch((e) => console.error(e));
  }, []);

  const addNewTodoHandler = () => {
    if (currentTask) {
      addTodo([...todos, { task: currentTask }]);
      setCurrentTask("");
    }
  };

  const completeTodoAt = (index: number) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    addTodo(newTodos);
  };

  const removeTodoAt = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    addTodo(newTodos);
  };

  const value = {
    todos,
    currentTask,
    setCurrentTask,
    addNewTodoHandler,
    completeTodoAt,
    removeTodoAt,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
