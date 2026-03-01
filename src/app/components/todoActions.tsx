"use client";

import Image from "next/image";

interface TodoActionsProps {
  id: string;
  completed: boolean;
  completeHandlerFunc: (id: string) => void;
  removeHandlerFunc: (id: string) => void;
}

const TodoActions = ({ id, completed, completeHandlerFunc, removeHandlerFunc }: TodoActionsProps) => (
  <>
    {!completed && <button onClick={() => completeHandlerFunc(id || "")}>
      <Image src="/check.svg" alt="Complete" width={20} height={20} />
    </button>}

    <button onClick={() => removeHandlerFunc(id || "")}>
      <Image src="/delete.svg" alt="Delete" width={20} height={20} />
    </button>
  </>
);

export default TodoActions;
