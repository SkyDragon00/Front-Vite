import { useState, useEffect } from "react";
import api from "../../services/api"; // Use Axios instance

export const DeleteGame = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await api.get("/game/all");
        setGames(response.data);
      } catch (err) {
        setError("Failed to load games. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this game?")) return;

    try {
      const response = await api.delete(`/game/${id}`);
      if (response.status === 200) {
        alert("Game deleted successfully!");
        setGames(games.filter((game) => game.id !== id)); // Remove deleted game from UI
      } else {
        alert(`Error: ${response.data.message || "Failed to delete game"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    }
  };

  if (loading) return <div>Loading games...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="delete-game-container">
      <h2>Delete Game</h2>
      <ul className="game-list">
        {games.map((game) => (
          <li key={game.id} className="game-item">
            <span>{game.name}</span>
            <button
              onClick={() => handleDelete(game.id)}
              className="button delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
