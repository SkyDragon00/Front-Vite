import { Routes, Route } from "react-router-dom";
import { User, Login, Admin, Home } from './pages';
import Signup from './pages/Signup'; // Import Signup page

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> {/* Add SignUp Route */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};
