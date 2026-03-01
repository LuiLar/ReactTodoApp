import { Suspense } from "react";
import styles from "../page.module.css";
import { type Todo } from "../types";
import TodoActions from "./todoActions";
import { removeTodo, updateTodo } from "../services/todosApi";

interface TodosElProps {
  todos: Todo[];
}

const TodosEl = ({ todos }: TodosElProps) => (
  <section className={styles.todosList}>
    {todos.map(({ id, task, completed }) => (
      <div key={id} className={styles.todosListItem}>
        <p className={(completed && styles.todosListCompletedItem) || ""}>
          {task}
        </p>

        <Suspense>
          <TodoActions
            id={id || ""}
            completed={!!completed}
            completeHandlerFunc={async (id) => {
              "use server";
              await updateTodo(id);
            }}
            removeHandlerFunc={async (id) => {
              "use server";
              await removeTodo(id);
            }}
          />
        </Suspense>
      </div>
    ))}
  </section>
);

export default TodosEl;
