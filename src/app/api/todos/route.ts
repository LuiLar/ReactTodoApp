export const GET = async () => {
  const response = await fetch("http://localhost:3000/todos.json");

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return new Response(response.body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
