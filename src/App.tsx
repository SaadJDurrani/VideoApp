import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home/Home";
import Player from "./Pages/Player/Player";
import Profile from "./Pages/Profile/Profile";
import { CustomTheme } from "./CustomTheme/CustomeTheme";

function App() {
  return (
    <>
    <CustomTheme> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/player" element={<Player />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CustomTheme>
    </>
  );
}

export default App;
