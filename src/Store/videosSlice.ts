import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_URL } from "src/MagicStrings/MagicUrl";
import { TVideo } from "src/typings/video.type";

type TStatus = "idle" | "loading" | "failed";

const initialState: { video?: TVideo; status: TStatus } = {
  status: "idle",
};

const videosSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideoByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getVideoByIdAsync.fulfilled, (state, action: PayloadAction<TVideo>) => {
        state.video = action.payload;
        state.status = "idle";
      })
      .addCase(getVideoByIdAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const getVideoByIdAsync = createAsyncThunk("fetchVideo", async (id: string) => {
  const res = await axios.get<TVideo>(`${Base_URL}/videos/${id}`);
  return res.data;
});
export default videosSlice;
