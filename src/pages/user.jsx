import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const User = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <h1>Welcome User</h1>
    </>
  )
}


// import { useEffect } from "react";
// 
// import GamesList from "../components/GamesList";

// export default function UserPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login"); // Redirect to login if no token is found
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <h1>Welcome User</h1>
//       <GamesList />
//     </div>
//   );
// }
