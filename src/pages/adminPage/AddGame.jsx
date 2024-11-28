import { useState } from "react";
import api from '../../services/api';  // Adjusted import path

const validTags = [
  "Action",
  "Platform",
  "Sandbox",
  "Horror",
  "Shooter",
  "RPG",
  "Adventure",
  "Sports",
  "Fighting",
  "Rhythm",
];

const validSeasons = ["Halloween", "Christmass", "Valentine", "Easter"];

export const AddGame = () => {
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    price: "",
    tags: [],
    season: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameData({ ...gameData, [name]: value });
  };

  const handleMultiSelect = (e) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setGameData({ ...gameData, [name]: selectedValues });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use Axios to send POST request
      const response = await api.post("/game/add", gameData);

      if (response.status === 200) {
        alert("Game added successfully!");
        setGameData({
          name: "",
          description: "",
          price: "",
          tags: [],
          season: [],
        });
      } else {
        alert(`Error: ${response.data.message || "Failed to add game"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <h1>Add a New Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Game Name"
          value={gameData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Game Description"
          value={gameData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={gameData.price}
          onChange={handleChange}
          required
        />
        <label>Tags</label>
        <select
          name="tags"
          multiple
          value={gameData.tags}
          onChange={handleMultiSelect}
        >
          {validTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <label>Season</label>
        <select
          name="season"
          multiple
          value={gameData.season}
          onChange={handleMultiSelect}
        >
          {validSeasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
        <button type="submit" className="button add-game-button">
          Add Game
        </button>
      </form>
    </div>
  );
};
