
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Store preference in localStorage
    localStorage.setItem("hexra-theme", darkMode ? "light" : "dark");
    // Apply theme to the document
    document.documentElement.classList.toggle("light-mode", !darkMode);
  };

  return (
    <div className="flex justify-between items-center w-full">
      <HamburgerMenu />
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-[100] p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <Sun className="text-hexra-purple w-5 h-5" />
        ) : (
          <Moon className="text-hexra-blue w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default Header;
