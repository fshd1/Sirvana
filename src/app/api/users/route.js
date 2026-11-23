import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
      },
    });
    return Response.json(users, { status: 200 });
  } catch (error) {
    console.log("Failed to fetch users", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
