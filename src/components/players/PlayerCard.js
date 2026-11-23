import FavoriteButton from "./FavoriteButton";

function PlayerCard({ role, rank, playTime }) {
  return (
    <div className="rounded-xl bg-surface w-75 flex flex-col justify-center items-center">
      <h2 className="p-4  text-primary font-bold">Player Info</h2>
      <div className="flex gap-2 flex-col items-center py-4">
        <p>
          role: <span className="text-muted">{role}</span>
        </p>
        <p>
          rank: <span className="text-muted">{rank}</span>
        </p>
        <p>
          play time: <span className="text-muted">{playTime}</span>
        </p>
      </div>
      <FavoriteButton />
    </div>
  );
}

export default PlayerCard;
