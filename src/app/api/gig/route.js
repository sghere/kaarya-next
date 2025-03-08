import { supabase } from "@/utils/supabase";

export async function POST(request) {
  const data = await request.json();
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.replace("Bearer ", ""); // Remove "Bearer " prefix

  if (!token) {
    return NextResponse.json(
      { error: "Unauthorized: No token provided" },
      { status: 401 }
    );
  }

  // 🔹 Verify Token with Supabase
  const {
    data: { user },
    error1,
  } = await supabase.auth.getUser(token);
  console.log({ user });
  if (error1 || !user) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
  const { error } = await supabase
    .from("gigs")
    .insert([{ ...data, customer_id: user.id }]);

  if (error) {
    return new Response(
      JSON.stringify({ message: "Error inserting data", error }),
      { status: 500 }
    );
  }

  return new Response(
    JSON.stringify({ message: "Data inserted successfully", data }),
    { status: 200 }
  );
}
