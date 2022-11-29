import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Social from "./pages/Social";
import SocialDetail from "./pages/SocialDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Social />} />
        <Route path="/detail" element={<SocialDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
