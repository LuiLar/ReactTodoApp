import styles from "./page.module.css";
import TodosEl from "./components/todos";
import { addNewTodo, fetchTodos } from "./services/todosApi";

export default async function Home() {
  const todos = await fetchTodos();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form action={addNewTodo} className={styles.taskInputCta}>
          <input
            name="task"
            type="text"
            placeholder="Task"
          />

          <button>Add</button>
        </form>

        <TodosEl todos={todos} />
      </main>

      <footer className={styles.footer}>
        <p>Created by Luis Larghi.</p>
        <p>Sr. F.E. Developer.</p>
      </footer>
    </div>
  );
}
