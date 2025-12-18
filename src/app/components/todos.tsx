import Image from "next/image";
import styles from "../page.module.css";
import { type Todo } from "../types";

interface TodosElProps {
  todos: Todo[];
  completeHandlerFunc: (index: number) => void;
  removeHandlerFunc: (index: number) => void;
}

const TodosEl = ({
  todos,
  completeHandlerFunc,
  removeHandlerFunc,
}: TodosElProps) => (
  <section className={styles.todosList}>
    {todos.map(({ task, completed }, index) => (
      <div key={index} className={styles.todosListItem}>
        <p className={(completed && styles.todosListCompletedItem) || ""}>
          {task}
        </p>

        {!completed && (
          <button onClick={() => completeHandlerFunc(index)}>
            <Image src="/check.svg" alt="Complete" width={20} height={20} />
          </button>
        )}

        <button onClick={() => removeHandlerFunc(index)}>
          <Image src="/delete.svg" alt="Delete" width={20} height={20} />
        </button>
      </div>
    ))}
  </section>
);

export default TodosEl;
