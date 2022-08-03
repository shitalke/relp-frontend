/**
 *
 * Auth Context
 *
 * Provides current user object to entire app
 *
 * Value:
 *      - signedIn (boolean) - indicates whether user is signed in or not
 *      - currentUser (string) - current user's userID
 *      - token (string) - token that you can use to make requests
 *
 * Used in App.js. See Header.js for example usage.
 */

import React from "react";
import styled from "styled-components";
import {auth} from "../services/firebase-service";

import Loading from "../components/Loading";

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {
  const [loadingUser, setLoadingUser] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState();
  const [token, setToken] = React.useState();

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      setLoadingUser(true);
      if (user) {
          setCurrentUser(user.multiFactor.user.uid);
          setToken(await auth().currentUser.getIdToken());
      } else {
        setCurrentUser();
        setToken(null);
      }
      setLoadingUser(false);
    });
    return unsubscribe;
  }, []);

  const value = React.useMemo(
    () => ({ currentUser, signedIn: currentUser !== undefined, token }),
    [currentUser, token]
  );

  if (loadingUser)
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
