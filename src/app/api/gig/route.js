import { supabase } from "@/utils/supabase";

export async function POST(request) {
  const { type = "GET", data = null } = await request.json();

  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.replace("Bearer ", "");

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

  if (error1 || !user) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
  if (type === "GET") {
    //get gigs for a specific user
    const { data: gigs, error } = await supabase
      .from("gigs")
      .select("*")
      .eq("customer_id", user.id);

    if (error) {
      return new Response(
        JSON.stringify({ message: "Error fetching data", error }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ data: gigs }), { status: 200 });
  }
  if (type === "POST") {
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
  if (type === "GETALL") {
    const { data: gigs, error } = await supabase
      .from("gigs")
      .select("*")
      .neq("customer_id", user.id);

    if (error) {
      return new Response(
        JSON.stringify({ message: "Error fetching data", error }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ data: gigs }), { status: 200 });
  }
}
