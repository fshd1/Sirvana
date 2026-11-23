import { prisma } from "../../../../lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  try {
    const { password, email } = await request.json();

    if (!password || !email) {
      return Response.json({ message: "Information needed" }, { status: 400 });
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return Response.json(
        { message: "Email and password must be strings" },
        { status: 400 },
      );
    }

    if (!email.trim() || !password) {
      return Response.json({ message: "Information needed" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!emailRegex.test(normalizedEmail) || password.length < 8) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (existingUser) {
      return Response.json(
        { message: "Email already registered" },
        { status: 409 },
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        email: normalizedEmail,
        passwordHash,
      },
    });

    return Response.json(
      {
        message: "New user registered",
        user: {
          id: newUser.id,
          email: newUser.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration Error:", error);

    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
