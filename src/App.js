import React, { useEffect } from "react";
import "./App.css";
import Router from "./router/router";
import LoginScreen from "./components/loginScreen/LoginScreen";
import { auth } from "./database/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {!user ? (
        <LoginScreen />
      ) : (
        <div className="app">
          <Router />
        </div>
      )}
    </>
  );
};

export default App;
