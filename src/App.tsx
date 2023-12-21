import { Box } from "@mui/material";
import "./App.scss";
import Router from "./router/Router";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./components/searchBarGroup/SearchBar";
import FooterBlock from "./components/footer/FooterBlock";

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Header />
        <SearchBar />
        <Router />
        <FooterBlock />
      </BrowserRouter>
    </Box>
  );
}

export default App;
