import { auth } from "../../../../auth";

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  return Response.json({
    id: session.user.id,
    email: session.user.email,
  });
}
