"use client";
import { useTheme } from "../context/ThemeContext";

export default function DarkBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 border rounded"
    >
      {theme === "dark" ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
    </button>
  );
}