import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    revalidatePath("/"); // homepage only
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to revalidate" }, { status: 500 });
  }
}

