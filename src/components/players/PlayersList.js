"use client";

import { useState } from "react";
import PlayerCard from "./PlayerCard";

function PlayersList() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);

  const [role, setRole] = useState("");
  const [rank, setRank] = useState("");
  const [playTime, setPlayTime] = useState("");

  const showPlayers = async () => {
    try {
      setPlayers([]);
      setError(null);
      setLoading(true);

      const response = await fetch(
        `/api/lft?role=${role}&rank=${rank}&playTime=${playTime}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch players");
      }
      const data = await response.json();

      setPlayers(data);
      setHasFetched(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 p-5">
        {hasFetched && players.length === 0 && !loading ? (
          <p>هیچ بازیکنی پیدا نشد</p>
        ) : (
          players.map((player) => (
            <PlayerCard
              key={player.id}
              role={player.role}
              rank={player.rank}
              playTime={player.playTime}
            />
          ))
        )}
      </div>

      <select
        className="bg-primary p-1 ml-4 rounded-l"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">all</option>
        <option value="support">support</option>
        <option value="carry">carry</option>
        <option value="mid">mid</option>
      </select>

      <select
        className="bg-primary p-1 ml-4 rounded-l"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
      >
        <option value="">all</option>
        <option value="immortal">immortal</option>
        <option value="legend">legend</option>
        <option value="archon">archon</option>
      </select>

      <select
        className="bg-primary p-1 ml-4 rounded-l"
        value={playTime}
        onChange={(e) => setPlayTime(e.target.value)}
      >
        <option value="">all</option>
        <option value="night">night</option>
        <option value="day">day</option>
      </select>

      <button
        disabled={loading}
        className={`rounded-lg bg-primary p-2 ${
          loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        onClick={showPlayers}
      >
        {loading ? "در حال دریافت..." : "نمایش بازیکن‌ها"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default PlayersList;
