import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomTheme } from "./CustomTheme/CustomeTheme";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home/Home";
import Player from "./Pages/Player/Player";
import Profile from "./Pages/Profile/Profile";

function App() {
  console.log("🔴 App Rerendered!!!");

  return (
    <CustomTheme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </CustomTheme>
  );
}

export default App;
