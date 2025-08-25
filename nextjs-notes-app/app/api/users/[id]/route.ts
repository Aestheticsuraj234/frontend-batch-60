import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { updateUserSchema } from "@/lib/validations"

// GET /api/users/[id] - Fetch a single user
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } =  await params

    const user = await db.user.findUnique({
      where: { id },
    })

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: user,
    })
  } catch (error) {
    console.error("Error fetching user:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch user" }, { status: 500 })
  }
}

// PUT /api/users/[id] - Update a user
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } =await params
    const body = await request.json()

    // Validate input data
    const validatedData = updateUserSchema.parse(body)

    // Check if user exists
    const existingUser = await db.user.findUnique({
      where: { id },
    })

    if (!existingUser) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    // Check if email is being updated and already exists
    if (validatedData.email && validatedData.email !== existingUser.email) {
      const emailExists = await db.user.findUnique({
        where: { email: validatedData.email },
      })

      if (emailExists) {
        return NextResponse.json({ success: false, error: "Email already exists" }, { status: 400 })
      }
    }

    // Update user
    const user = await db.user.update({
      where: { id },
      data: validatedData,
    })

    return NextResponse.json({
      success: true,
      data: user,
    })
  } catch (error) {
    console.error("Error updating user:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ success: false, error: "Invalid input data", details: error }, { status: 400 })
    }

    return NextResponse.json({ success: false, error: "Failed to update user" }, { status: 500 })
  }
}

// DELETE /api/users/[id] - Delete a user
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    // Check if user exists
    const existingUser = await db.user.findUnique({
      where: { id },
    })

    if (!existingUser) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    // Delete user
    await db.user.delete({
      where: { id },
    })

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting user:", error)
    return NextResponse.json({ success: false, error: "Failed to delete user" }, { status: 500 })
  }
}
