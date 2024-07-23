import axios from "axios";
import { TVideo } from "../typings/video.type";

export async function getallvideosUrl(): Promise<TVideo[]> {
  const res = await axios.get<TVideo[]>("http://localhost:3000/videos");
  return res.data;
}

export const getVideoUrlById = async (id: string): Promise<string> => {
  try {
    const response = await axios.get<{ videos: TVideo[] }>(
      "http://localhost:3001/videos"
    );
    const videos = response.data.videos;
    const video = videos.find((video) => video.id === id);
    if (video) {
      return video.videoUrl;
    } else {
      throw new Error(`Video with ID ${id} not found`);
    }
  } catch (error) {
    console.error(`Error fetching video URL for ID ${id}:`, error);
    throw error;
  }
};
// src/data/videos.ts
export const videos: TVideo[] = [
  {
    id: "1",
    title: "Video 1",
    thubmnailUrl: "https://via.placeholder.com/150",
    videoUrl: "https://www.example.com/video1",
  },
  {
    id: "2",
    title: "Video 2",
    thubmnailUrl: "https://via.placeholder.com/150",
    videoUrl: "https://www.example.com/video2",
  },
  {
    id: "3",
    title: "Video 3",
    thubmnailUrl: "https://via.placeholder.com/150",
    videoUrl: "https://www.example.com/video3",
  },
  // Add more videos as needed
];
