import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dock from "./components/Dock";
import "./index.css";

function Placeholder({ title }) {
  return (
    <main className="placeholder-page">
      <div className="placeholder-glass">
        <p className="eyebrow">KINGSBEN OFOSU AMOAKO</p>
        <h1>{title}</h1>
        <p>This page is being built.</p>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<Placeholder title="About Me" />}
          />
          <Route
            path="/skills"
            element={<Placeholder title="Skills" />}
          />
          <Route
            path="/work"
            element={<Placeholder title="My Work" />}
          />
          <Route
            path="/contact"
            element={<Placeholder title="Contact" />}
          />
        </Routes>

        <Dock />
      </div>
    </BrowserRouter>
  );
}

export default App;