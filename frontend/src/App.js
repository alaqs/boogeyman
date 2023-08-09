import "./App.css";
import {Landing} from "./pages/Landing";
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
  typography: {
    fontFamily: 'Manrope, sans-serif',
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
