import { prisma } from "../../../lib/prisma";
import { auth } from "../../../../auth";

export async function POST(request) {
  const session = await auth();

  if (!session?.user?.id) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { rank, mmr, role, playTime } = await request.json();

    if (typeof rank !== "string" || !rank.trim()) {
      return Response.json({ message: "Invalid rank" }, { status: 400 });
    }
    if (!Number.isInteger(mmr) || mmr < 0) {
      return Response.json({ message: "Invalid mmr" }, { status: 400 });
    }
    if (typeof role !== "string" || !role.trim()) {
      return Response.json({ message: "Invalid role" }, { status: 400 });
    }
    if (typeof playTime !== "string" || !playTime.trim()) {
      return Response.json({ message: "Invalid playTime" }, { status: 400 });
    }

    const existingProfile = await prisma.playerProfile.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    if (existingProfile) {
      return Response.json(
        { message: "Player profile already exists" },
        { status: 409 },
      );
    }

    const newProfile = await prisma.playerProfile.create({
      data: {
        userId: session.user.id,
        rank: rank.trim(),
        mmr,
        role: role.trim(),
        playTime: playTime.trim(),
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
    console.error("Create profile error:", error);

    if (error?.code === "P2002") {
      return Response.json(
        { message: "Player profile already exists" },
        { status: 409 },
      );
    }

    if (error instanceof SyntaxError) {
      return Response.json({ message: "Invalid JSON body" }, { status: 400 });
    }

    return Response.json({ message: "Internal Server Error" }, { status: 500 });
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
