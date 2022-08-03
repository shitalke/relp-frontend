import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeCategory from "./HomeCategory";
import { signout } from "../services/signup";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [restroomIds, setRestroomIds] = useState();
  const { signedIn, currentUser, token } = React.useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("home/restrooms").then((response) => {
      let temp = [];
      Object.entries(response.data).map(([_, val]) => temp.push(val._id));
      setRestroomIds(temp);
    });

    const getUserInfo = async () => {
      return axios.get(`/profile/info/${currentUser}`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => console.log(res));
    };

    getUserInfo();
  }, [signedIn, currentUser, token]);

  return (
    <>
      <HomeCategory category="Near Me" restroomIds={restroomIds} />
      <HomeCategory category="Editors Choice" restroomIds={restroomIds} />

      {/* Temporary Sign In + Sign Out Button */}
      <div style={{ position: "absolute", bottom: "0" }}>
        {signedIn ? (
          <>
            <button
              onClick={() => {
                signout();
                navigate("/login", { replace: true });
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/login", { replace: true });
            }}
          >
            Sign in
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
