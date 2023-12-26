import "./App.css";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search"  element={<SearchResult />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
