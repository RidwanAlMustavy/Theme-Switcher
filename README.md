# 🌌 Premium Glassmorphic Theme Switcher

A sleek, responsive dark and light mode dashboard built natively using the **React Context API** and dynamic CSS Custom Properties. 

---

## 🚀 How It Works Under the Hood

Instead of passing states down through complex UI layers, this application uses a centralized context broadcast system:



1. **Global Core State:** The `ThemeProvider` initializes the app state, reading instantly from `localStorage` to preserve user choice on reload.
2. **Document Modulation:** A localized `useEffect` macro intercepts state mutations and injects the active class (`.light` or `.dark`) straight into the native browser `<html>` document root.
3. **Reactive Design Layer:** The application styles (`index.css`) use CSS variables tied directly to those root classes. The moment the document class flips, values change instantly across the dashboard.
4. **Hardware Acceleration:** The system leverages GPU interpolation (`transition: all 0.5s`) to create a fluid, premium visual blend between themes.

---

## 📦 Directory Overview

* **`src/context/ThemeContext.jsx`**: Global context pipeline, state management wrapper, and custom `useTheme()` consumption hook.
* **`src/App.jsx`**: Implements the main dashboard card container, utilizing context data to control analytics views.
* **`src/index.css`**: Design foundation housing modern glassmorphic panels and dark/light color maps.
