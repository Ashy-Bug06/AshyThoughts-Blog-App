import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateThought from "./pages/CreateThought";
import EditThought from "./pages/EditThought";

function App() {
  return (
    <Router>
      <div style={{ 
        padding: "20px 40px", 
        background: "linear-gradient(135deg, #1a1d3f 0%, #1c4966 100%)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <Link 
            to="/" 
            style={{ 
              fontSize: "24px",
              fontWeight: "800",
              color: "#ffffff",
              textDecoration: "none",
              letterSpacing: "-0.5px"
            }}
          >
            Ashy Thoughts
          </Link>

          <div style={{ display: "flex", gap: "15px" }}>
            <Link 
              to="/" 
              style={{ 
                color: "rgba(255, 255, 255, 0.9)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
                padding: "10px 20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                background: "rgba(255, 255, 255, 0.1)"
              }}
              onMouseOver={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.color = "rgba(255, 255, 255, 0.9)";
              }}
            >
              Home
            </Link>

            <Link 
              to="/create" 
              style={{ 
                color: "#1c4966",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
                padding: "10px 20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                background: "#ffffff"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 12px rgba(255,255,255,0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Share Thought
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateThought />} />
        <Route path="/edit/:id" element={<EditThought />} />
      </Routes>
    </Router>
  );
}

export default App;