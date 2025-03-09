import { supabase } from "@/utils/supabase";

export async function POST(request) {
  const data = await request.json();

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
  if (data.user.id) {
    //get gigs for a specific user
    console.log({ data });
    const { data: gigs, error } = await supabase
      .from("gigs")
      .select("*")
      .eq("customer_id", data.user.id);

    console.log({ gigs, error, data });
    if (error) {
      return new Response(
        JSON.stringify({ message: "Error fetching data", error }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ data: gigs }), { status: 200 });
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

export const GET = async () => {
  const { data, error } = await supabase.from("gigs").select("*");

  if (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching data", error }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify(data), { status: 200 });
};
