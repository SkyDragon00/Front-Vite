import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Cambia esto según tu configuración
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllGames = async () => {
  try {
      const response = await api.get('/game/all');
      return response.data;
  } catch (error) {
      console.error('Error fetching games:', error);
      throw error;
  }
};

export { getAllGames };

export default api;
