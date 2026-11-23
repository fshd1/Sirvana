"use client";

import { useState } from "react";

function FavoriteButton({ playerId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };

  return <button onClick={favoriteHandler}>{isFavorite ? "❤️" : "🤍"}</button>;
}

export default FavoriteButton;
