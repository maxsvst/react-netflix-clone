import React from "react";
import "./App.css";

import HomeScreen from "./components/homeScreen/HomeScreen";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="app">
      <HomeScreen />
      <Nav />
    </div>
  );
}

export default App;
