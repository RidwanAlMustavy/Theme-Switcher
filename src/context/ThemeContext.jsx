import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // 1. Added import here

// 1. Initialize the Context channel
const ThemeContext = createContext();

// 2. Create the Provider Wrapper
export function ThemeProvider({ children }) {
  // Read initial theme from localStorage, default to dark mode for a premium feel
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "dark";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Sync the theme class directly onto the HTML document tag
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 2. Added Prop Validation here to remove the ESLint warning
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// 3. Create a custom hook for clean, effortless consumption
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
