import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LeaderboardPage from "./Leaderboard/LeaderboardPage";
import RestroomPage from "./Restroom/RestroomPage";
import ProfilePage from "./Profile/ProfilePage";
import HomePage from "./Home/HomePage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/leaderboard/:filter" element={<LeaderboardPage />} />

        <Route path="/restroom" element={<RestroomPage />} />
        <Route path="/restroom/:restroom_id" element={<RestroomPage />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:user_id" element={<ProfilePage />} />
      
      </Routes>
    </Router>
  );
}

export default App;
