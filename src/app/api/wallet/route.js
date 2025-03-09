import { supabase } from "@/utils/supabase";

export const POST = async (req) => {
  const { type = "GET", data = null } = await req.json();
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.replace("Bearer ", "");
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);
  if (error || !user) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }

  if (user.id && type === "GET") {
    const { data, error } = await supabase
      .from("wallets")
      .select("*")
      .eq("id", user.id);
    if (error) {
      return new Response(
        JSON.stringify({ message: "Error fetching data", error }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ data: data[0].balance }), {
      status: 200,
    });
  }

  if (user.id && type === "ADD") {
    const { error } = await supabase
      .rpc("add_balance", {
        wallet_id: user.id,
        amount: data,
      })
      .select("*");
    console.log({ error });
    if (error) {
      return new Response(
        JSON.stringify({ message: "Error fetching data", error }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ data: data[0].balance }), {
      status: 200,
    });
  }
};
