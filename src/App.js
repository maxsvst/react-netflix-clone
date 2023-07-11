import React from "react";
import "./App.css";
import Router from "./router/router";
import LoginScreen from "./components/loginScreen/LoginScreen";

const App = () => {
  const user = null;

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
