import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./Component/Banner";
import ErrPg from "./Component/ErrPg";
import Home from "./Component/Home";
import Favorites from "./Component/Favorites";
import NavBar from "./Component/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Favorites/" element={<Favorites />} />
        <Route path="*" element={<ErrPg />} />
      </Routes>
    </Router>
  );
}

export default App;
