import jwtDecode from "jwt-decode";

export const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null; // Si no hay token, retorna null

  try {
    const decoded = jwtDecode(token); // Decodifica el token
    console.log("Token decodificado:", decoded); // Log para depuración
    return decoded.roleId; // Cambia `roleId` si tu campo se llama diferente
  } catch (err) {
    console.error("Error decodificando el token:", err);
    return null; // Maneja el error y retorna null si algo falla
  }
};
