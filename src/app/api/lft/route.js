const lft = [
  {
    id: "1",
    userId: "user-10",
    role: "support",
    rank: "immortal",
    playTime: "day",
  },
  {
    id: "2",
    userId: "user-12",
    role: "carry",
    rank: "legend",
    playTime: "night",
  },
  {
    id: "3",
    userId: "user-14",
    role: "support",
    rank: "archon",
    playTime: "night",
  },
];

const validRanks = ["archon", "legend", "immortal"];

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const role = searchParams.get("role");
  const rank = searchParams.get("rank");
  const playTime = searchParams.get("playTime");

  const filteredPlayers = lft.filter(
    (item) =>
      (!role || item.role === role) &&
      (!rank || item.rank === rank) &&
      (!playTime || item.playTime === playTime),
  );

  return Response.json(filteredPlayers, { status: 200 });
}

export async function POST(request) {
  //   const { userId, role, rank, playTime } = await request.json();
  const body = await request.json();

  console.log("Request Body:", body);

  const { userId, role, rank, playTime } = body;

  console.log({ userId, role, rank, playTime });

  console.log("Extracted Values:", {
    userId,
    role,
    rank,
    playTime,
  });

  const newPlayer = {
    id: crypto.randomUUID(),
    userId,
    role,
    rank,
    playTime,
  };

  if (!role || !rank || !playTime) {
    return Response.json({ message: "Invalid Information" }, { status: 400 });
  } else if (!validRanks.includes(rank)) {
    return Response.json({ message: "Invalid Rank" }, { status: 400 });
  } else if (lft.some((user) => user.userId === userId)) {
    return Response.json(
      { message: "You Cannot add another request" },
      { status: 409 },
    );
  }

  lft.push(newPlayer);

  return Response.json(newPlayer, { status: 201 });
}
