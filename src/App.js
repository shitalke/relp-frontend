import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import firebase from "./services/firebase-service";
import LeaderboardPage from "./Leaderboard/LeaderboardPage";
import RestroomPage from "./Restroom/RestroomPage";
import ProfilePage from "./Profile/ProfilePage";
import HomePage from "./Home/HomePage";
import Login from "./User/Login";
import Signup from "./User/Signup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(true);
        console.log(user);
        return user;
      }
    });
  }, []);


  return (
    <Router>
      <Routes>
        {/* Unprotected Routes */}
        {!user && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
        {/* Protected Routes */}
        {user && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard/:filter" element={<LeaderboardPage />} />
            <Route path="/restroom/:restroom_id" element={<RestroomPage />} />
            <Route path="/profile/:user_id" element={<ProfilePage />} />
            <Route path="*" element={<div>Oops, page not found</div>} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
