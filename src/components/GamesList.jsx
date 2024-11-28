import { useEffect, useState } from "react";
import axios from "../services/api";

export default function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axios.get("/game/all");
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h2>Available Games</h2>
      {games.length > 0 ? (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <h3>{game.name}</h3>
              <p>{game.description}</p>
              <p>Price: ${game.price}</p>
              {game.tags && <p>Tags: {game.tags.join(", ")}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>No games available.</p>
      )}
    </div>
  );
}
