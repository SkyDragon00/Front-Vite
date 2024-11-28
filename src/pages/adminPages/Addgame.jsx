import React from 'react'

export const Addgame = () => {
  return (
    <div>Addgame</div>
  )
}
// import { useState } from "react";
// import axios from "../../services/api";

// export default function AddGame() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [tags, setTags] = useState([]);
//   const [message, setMessage] = useState("");

//   const availableTags = ['Action', 'Platform', 'Sandbox', 'Horror', 'Shooter', 'Halloween', 'Christmass', 'RPG', 'Adventure', 'Sports', 'Fighting', 'Rhythm'];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.post("/game/add", {
//         name,
//         description,
//         price: parseFloat(price),
//         tags,
//       });

//       setMessage(data.message);
//       setName("");
//       setDescription("");
//       setPrice("");
//       setTags([]);
//     } catch (error) {
//       console.error("Error adding game:", error);
//       setMessage("Failed to add game. Please try again.");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Add a New Game</h1>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//         <input
//           type="text"
//           placeholder="Game Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Game Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Game Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <select multiple value={tags} onChange={(e) => setTags([...e.target.selectedOptions].map(o => o.value))}>
//           {availableTags.map(tag => (
//             <option key={tag} value={tag}>{tag}</option>
//           ))}
//         </select>
//         <button type="submit">Add Game</button>
//       </form>
//     </div>
//   );
// }

