import { useEffect, useState } from "react";
import { getAllGames } from "../services/api";
import "../assets/css/global.css";

export const User = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const data = await getAllGames();
                setGames(data);
            } catch (err) {
                setError("Failed to load games. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    return (
        <>
            <h1>User</h1>
            {loading && <div>Loading games...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && (
                <div className="games-container">
                    <h2>Available Games</h2>
                    <div className="games-list">
                        {games.map((game) => (
                            <div key={game.id} className="game-card">
                                <h3>{game.name}</h3>
                                <p>{game.description}</p>
                                <p>Price: ${game.price}</p>
                                {game.tags?.length > 0 && (
                                    <div>
                                        <strong>Tags:</strong>
                                        <ul>
                                            {game.tags.map((tag, index) => (
                                                <li key={index}>{tag}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {game.season?.length > 0 && (
                                    <div>
                                        <strong>Seasonal:</strong>
                                        <ul>
                                            {game.season.map((season, index) => (
                                                <li key={index}>{season}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
