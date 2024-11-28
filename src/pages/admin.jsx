export const Admin = () => {
  return (
    <>
      <h1>Welcome Admin</h1>
    </>
  )
}

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import DeleteGame from "../components/DeleteGame";

// export default function AdminPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login"); // Redirect to login if no token is found
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <h1>Welcome Admin</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/admin/add-game">Add New Game</Link>
//           </li>
//         </ul>
//       </nav>
//       <DeleteGame />
//     </div>
//   );
// }
