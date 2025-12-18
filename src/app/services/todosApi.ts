export async function fetchTodos() {
  const response = await fetch("./todos.json");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch todos", data);
  }

  return data;
}
