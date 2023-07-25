import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <SearchProvider>
    <FavoritesProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </FavoritesProvider>
  </SearchProvider>

  // </React.StrictMode>
);
