import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <SearchProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </SearchProvider>

  // </React.StrictMode>
);
