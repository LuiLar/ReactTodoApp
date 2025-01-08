"use client"

import styles from "./page.module.css";
import { useState } from "react";
import TodosEl from "./components/todos";

export type Todo = {
  task: string;
  completed?: boolean;
}

export default function Home() {
  const [currentTask, setCurrentTask] = useState<string>("");
  const [todos, addTodo] = useState<Todo[]>([]);

  const addNewTodoHandler = () => {
    if (currentTask) {
      addTodo([...todos, { task: currentTask }]);
      setCurrentTask("");
    }
  }

  const completeTodoAt = (index: number) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    addTodo(newTodos);
  }

  const removeTodoAt = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    addTodo(newTodos);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.taskInputCta}>
          <input
            type="text"
            placeholder="Task"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
          />

          <button onClick={addNewTodoHandler}>Add</button>
        </section>

        <TodosEl
          todos={todos}
          completeHandlerFunc={completeTodoAt}
          removeHandlerFunc={removeTodoAt}
        />
      </main>

      <footer className={styles.footer}>
        <p>Created by Luis Larghi.</p>
        <p>Sr. F.E. Developer.</p>
      </footer>
    </div>
  );
}
