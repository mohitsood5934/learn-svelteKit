/** @type {import('./$types').RequestHandler} */

export async function GET() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5");
      if (!response.ok) {
        return new Response("Failed to fetch data", { status: 500 });
      }
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(`Error occurred - ${error.message}`, { status: 500 });
    }
  }
  