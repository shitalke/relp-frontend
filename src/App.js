import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AuthContext, AuthProvider} from "./contexts/AuthContext";
import LeaderboardPage from "./Leaderboard/LeaderboardPage";
import RestroomPage from "./Restroom/RestroomPage";
import ProfilePage from "./Profile/ProfilePage";
import HomePage from "./Home/HomePage";
import Login from "./User/Login";
import Signup from "./User/Signup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AppRouter() {
  const { signedIn, currentUser } = React.useContext(AuthContext);

  useEffect(() => {
    console.log(signedIn);
  }, [currentUser, signedIn])

  return (
    <Router>
      <Routes>
        {/* Not logged in */}
        {!signedIn && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}

        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard/:filter" element={<LeaderboardPage />} />
        <Route path="/restroom/:restroom_id" element={<RestroomPage />} />
        <Route path="/profile/:user_id" element={<ProfilePage />} />
        <Route path="*" element={<div>Oops, page not found</div>} />

      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
