import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import videosSlice from "./videosSlice";
import { videoApi } from "./videos/videoAPI";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    videos: videosSlice.reducer,
    [videoApi.reducerPath]: videoApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(videoApi.middleware),
});
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
