import { auth } from "../../../../auth";
import { prisma } from "../../../lib/prisma";
import { validatePlayerProfile } from "../../../lib/validators/PlayerProfile";

export async function POST(request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    let body;

    try {
      body = await request.json();
    } catch {
      return Response.json({ message: "Invalid JSON body" }, { status: 400 });
    }

    const validation = validatePlayerProfile(body);

    if (!validation.success) {
      return Response.json({ message: validation.message }, { status: 400 });
    }

    const newProfile = await prisma.playerProfile.create({
      data: {
        ...validation.data,
        userId: session.user.id,
      },
    });

    return Response.json(
      {
        message: "Player profile created successfully",
        profile: newProfile,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error?.code === "P2002") {
      return Response.json(
        { message: "Player profile already exists" },
        { status: 409 },
      );
    }

    console.error("Create profile error:", error);

    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return Response.json({ message: "UnAuthorized" }, { status: 401 });
  }

  try {
    const profile = await prisma.playerProfile.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    if (!profile) {
      return Response.json(
        { message: "Player profile does not exist" },
        { status: 404 },
      );
    }

    return Response.json(
      {
        message: "Player profile fetched successfully",
        profile,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Get profile error:", error);

    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return Response.json({ message: "Unauthorized user" }, { status: 401 });
    }

    let body;

    try {
      body = await request.json();
    } catch {
      return Response.json({ message: "Invalid JSON body" }, { status: 400 });
    }

    const validation = validatePlayerProfile(body, {
      partial: true,
    });

    if (!validation.success) {
      return Response.json({ message: validation.message }, { status: 400 });
    }

    const updatedProfile = await prisma.playerProfile.update({
      where: {
        userId: session.user.id,
      },
      data: validation.data,
    });

    return Response.json(
      {
        message: "Player profile updated successfully",
        profile: updatedProfile,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error?.code === "P2025") {
      return Response.json(
        { message: "Player profile does not exist" },
        { status: 404 },
      );
    }

    console.error("Update player profile error:", error);

    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
