import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./index.css";

function DashboardCard() {
  // Use our clean hook to access global context state directly
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="glass-card">
      <div className="card-header">
        <h2>{theme === "dark" ? "🌌 Dark Mode" : "☀️ Light Mode"}</h2>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>

      <p className="description">
        This interactive glassmorphism panel uses React Context API to manage
        themes globally across the component tree without prop drilling.
      </p>

      {/* Modern Analytics Content Layout Example */}
      <div className="analytics-metric">
        <div className="metric-title">System Conversion Rate</div>
        <div className="metric-value">+24.8%</div>
      </div>

      <div className="analytics-metric">
        <div className="metric-title">Active Server Latency</div>
        <div className="metric-value" style={{ color: "#10b981" }}>
          12ms
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    // Wrap the application tree so context is accessible anywhere
    <ThemeProvider>
      <div className="app-wrapper">
        <DashboardCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
