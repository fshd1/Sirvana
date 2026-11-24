import { PLAY_TIMES, RANKS, ROLES } from "../constants/PlayerProfile";

export function validatePlayerProfile(body, { partial = false } = {}) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return {
      success: false,
      message: "Invalid request body",
    };
  }

  const { rank, mmr, role, playTime, isLookingForTeam } = body;

  const data = {};

  if (!partial || rank !== undefined) {
    if (typeof rank !== "string") {
      return {
        success: false,
        message: "Invalid rank",
      };
    }

    const normalizedRank = rank.trim().toLowerCase();

    if (!RANKS.includes(normalizedRank)) {
      return {
        success: false,
        message: "Invalid rank",
      };
    }

    data.rank = normalizedRank;
  }

  if (!partial || role !== undefined) {
    if (typeof role !== "string") {
      return {
        success: false,
        message: "Invalid role",
      };
    }

    const normalizedRole = role.trim().toLowerCase();

    if (!ROLES.includes(normalizedRole)) {
      return {
        success: false,
        message: "Invalid role",
      };
    }

    data.role = normalizedRole;
  }

  if (!partial || playTime !== undefined) {
    if (typeof playTime !== "string") {
      return {
        success: false,
        message: "Invalid playTime",
      };
    }
    const normalizedPlayTime = playTime.trim().toLowerCase();

    if (!PLAY_TIMES.includes(normalizedPlayTime)) {
      return {
        success: false,
        message: "Invalid playTime",
      };
    }

    data.playTime = normalizedPlayTime;
  }

  if (!partial || mmr !== undefined) {
    if (!Number.isInteger(mmr) || mmr < 0 || mmr > 2147483647) {
      return {
        success: false,
        message: "Invalid mmr",
      };
    }

    data.mmr = mmr;
  }

  if (isLookingForTeam !== undefined) {
    if (typeof isLookingForTeam !== "boolean") {
      return {
        success: false,
        message: "Invalid isLookingForTeam",
      };
    }

    data.isLookingForTeam = isLookingForTeam;
  }

  if (Object.keys(data).length === 0) {
    return {
      success: false,
      message: "No valid fields provided",
    };
  }

  return {
    success: true,
    data,
  };
}
