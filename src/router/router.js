import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../components/homeScreen/HomeScreen";
import ProfileScreen from "../components/profileScreen/ProfileScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeScreen />} path="/" />
        <Route element={<ProfileScreen />} path="/profile" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
