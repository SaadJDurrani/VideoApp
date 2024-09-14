// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_URL_Express } from "src/MagicStrings/MagicUrl";
import { TVideo } from "src/typings/video.type";

// Define a service using a base URL and expected endpoints
export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({ baseUrl: Base_URL_Express }),
  endpoints: (builder) => ({
    getVideoById: builder.query<TVideo, string>({
      query: (id) => `/videos/${id}`,
    }),
    getAllVideos: builder.query<TVideo[], void>({
      query: () => `/videos`,
    }),
    uploadVideo: builder.mutation<TVideo, Omit<TVideo, "id">>({
      query: (payload) => ({ url: `/videos`, method: "POST", body: payload }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetVideoByIdQuery, useGetAllVideosQuery, useUploadVideoMutation } = videoApi;
