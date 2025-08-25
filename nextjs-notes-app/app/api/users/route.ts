import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createUserSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = createUserSchema.parse(body);

    const existingUser = await db.user.findUnique({
      where: {
        email: validatedData.email,
      },
    });

    if (existingUser) {
      return NextResponse.json({
        success: false,
        error: "Email already exists",
      });
    }

    const user = await db.user.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        data: user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}


export async function GET(request:NextRequest) {
  try {
    const users = await db.user.findMany({
      orderBy:{createdAt:"desc"}
    })

    return NextResponse.json({
       success: true,
      data: users,
    })
  } catch (error) {
      console.error("Error fetching users:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch users" }, { status: 500 })
  }
}