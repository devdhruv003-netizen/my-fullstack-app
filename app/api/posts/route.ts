import { auth } from "@clerk/nextjs/server";
import {prisma} from "@/app/lib/db"
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const posts = await prisma.post.findMany({
      where: { userId: userId }, // Sirf user ka data
    });
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: "DB Error" }, { status: 500 });
  }
}


// WHen this Api get call it will bring data from Prisma DB