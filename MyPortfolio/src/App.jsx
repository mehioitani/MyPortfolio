import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";

function App() {
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  return (
    <div className="my-portfolio">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
