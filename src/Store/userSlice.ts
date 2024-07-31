// src/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "src/typings/video.type";

/** Example Reducer */
function example(state: TUser) {
  return state;
}

const initialState: TUser = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  Liked: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TUser>) {
      return { ...state, ...action.payload };
    },
    updateLikedVideos: (state, action: PayloadAction<string[]>) => {
      state.Liked = action.payload;
    },
    logout: function () {
      return initialState;
    },
    exampleAction: example,
  },
});

export const { setUser, updateLikedVideos, logout } = userSlice.actions;
export default userSlice;
