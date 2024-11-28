import { useState } from "react";
import axios from "../services/api";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/auth/login", { email, password });
      const roleId = data.user.roleId;

      localStorage.setItem("token", data.token);

      if (roleId === 1) {
        navigate("/user");
      } else if (roleId === 2) {
        navigate("/admin");
      } else {
        setError("Role not recognized");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError(err.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="button" type="submit">
        Login
      </button>
    </form>
  );
}
