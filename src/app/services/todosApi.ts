"use server";

import { revalidatePath } from "next/cache";
import { get, add, update, remove } from "../providers/firebase";

export async function fetchTodos() {
  const data = await get()

  return data;
}

export async function addNewTodo(formData: FormData) {
  const taskMessage = formData.get("task") as string;

  await add(taskMessage)

  revalidatePath("/");
}

export async function updateTodo(todoId: string) {
  await update(todoId);

  revalidatePath("/");
}

export async function removeTodo(todoId: string) {
  await remove(todoId);

  revalidatePath("/");
}
