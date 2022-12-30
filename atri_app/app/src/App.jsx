import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Forms from "./pages/Forms.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/aboutus" element={<Aboutus />} />
<Route path="/forms" element={<Forms />} />
    </Routes>
  );
}
