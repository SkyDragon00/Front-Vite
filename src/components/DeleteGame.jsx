import { useEffect, useState } from "react";
import axios from "../services/api";

export default function DeleteGame() {
  const [games, setGames] = useState([]);
  const [message, setMessage] = useState("");

  const fetchGames = async () => {
    try {
      const { data } = await axios.get("/game/all");
      setGames(data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/game/${id}`);
      setMessage(`Game with ID ${id} deleted successfully.`);
      fetchGames();
    } catch (error) {
      console.error("Error deleting game:", error);
      setMessage("Failed to delete the game. Please try again.");
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      <h2>Eliminate Games</h2>
      {message && <p>{message}</p>}
      {games.length > 0 ? (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <h3>{game.name}</h3>
              <button onClick={() => handleDelete(game.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No games available.</p>
      )}
    </div>
  );
}
