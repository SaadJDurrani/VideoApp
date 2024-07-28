import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Guard from "./Components/Guard";
import { CustomTheme } from "./CustomTheme/CustomeTheme";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home/Home";
import Player from "./Pages/Player/Player";
import Profile from "./Pages/Profile/Profile";
import { getLoggedInUser } from "./utils/Local.util";

function App() {
  const user = getLoggedInUser();

  const [globalLikedArray, setGlobalLikedArray] = useState<string[]>(user?.Liked || []);
  console.log("🔴 App Rerendered!!!");

  return (
    <CustomTheme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home globalArray={globalLikedArray} setGlobalArray={setGlobalLikedArray} />} />
          <Route
            path="/player/:id"
            element={<Player globalArray={globalLikedArray} setGlobalArray={setGlobalLikedArray} />}
          />
          <Route
            path="/profile"
            element={
              <Guard>
                <Profile />
              </Guard>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </CustomTheme>
  );
}

export default App;
