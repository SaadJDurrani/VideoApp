import { BrowserRouter, Route, Routes } from "react-router-dom";
import Guard from "./Components/Guard";
import { CustomTheme } from "./CustomTheme/CustomeTheme";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home/Home";
import Player from "./Pages/Player/Player";
import Profile from "./Pages/Profile/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./Store/userSlice";
import { getUserById } from "./utils/Api.util";
import { getCurrentUserId } from "./utils/Local.util";

function App() {
  console.log("🔴 App Rerendered!!!");
  const dispatch = useDispatch();
  async function fetchUserData() {
    const userId = getCurrentUserId();
    const userData = await getUserById(userId!);
    console.log("userrrrr!!!!", userData);
    dispatch(setUser(userData));
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <CustomTheme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/:id" element={<Player />} />
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
