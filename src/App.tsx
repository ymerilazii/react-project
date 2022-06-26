import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";

function App() {
  
  const [user, setUser] = useState<string | null>(() => {
    const value = localStorage.getItem("user");
    return value;
  });

  const handleLogin = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
 };

  return user !== null ? <Home user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />;
}

export default App;
