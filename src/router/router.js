import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../components/homeScreen/HomeScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeScreen />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
