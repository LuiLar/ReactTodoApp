"use client";

import styles from "./page.module.css";
import { useContext } from "react";
import TodosEl from "./components/todos";
import { TodosContext } from "./providers/TodosProvider";

export default function Home() {
  const {
    todos,
    currentTask,
    setCurrentTask,
    addNewTodoHandler,
    completeTodoAt,
    removeTodoAt,
  } = useContext(TodosContext);

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
