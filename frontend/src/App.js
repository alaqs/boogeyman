import "./App.css";
import { Home } from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
