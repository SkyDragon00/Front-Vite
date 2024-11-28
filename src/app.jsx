import { Routes, Route } from "react-router-dom";
import { User, Login, Admin, Home } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      {/* <Route path="/Admin/add-game" element={<AddGame />} /> */}
      <Route path="/user" element={<User />} />
    </Routes>
  );
};


