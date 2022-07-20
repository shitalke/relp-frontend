import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LeaderboardPage from "./Leaderboard/LeaderboardPage";
import RestroomPage from "./Restroom/RestroomPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/restroom/:test" element={<RestroomPage />} />
        <Route path="/restroom" element={<LeaderboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
