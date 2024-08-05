import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "../src/styles/index.css";
import Register from "./pages/register";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
