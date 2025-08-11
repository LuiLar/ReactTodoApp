import { todos } from "@/todos";

export const dynamic = "force-static";

export async function GET() {
  return new Response(JSON.stringify({ todos }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
