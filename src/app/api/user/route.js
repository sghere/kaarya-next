export async function POST(request) {
  const { id } = await request.json();
  return Response.json({ message: "Hello World", id });
}
