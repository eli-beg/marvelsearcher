import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/index";
import GlobalStyle from "./styles/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
