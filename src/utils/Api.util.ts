import axios from "axios";
import { TVideo } from "../typings/video.type";
import { Base_URL } from "src/MagicStrings/MagicUrl";

export async function getallVideos(): Promise<TVideo[]> {
  const res = await axios.get<TVideo[]>(`${Base_URL}/videos`);
  return res.data;
}
export const getVideoById = async (id: string): Promise<TVideo> => {
  const res = await axios.get<TVideo>(`${Base_URL}/videos/${id}`);
  return res.data;
};

export const LIKED_VIDEOS: TVideo[] = [
  {
    id: "1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Amazing Nature",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    title: "Wildlife Documentary",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
];

export const VIDEOS: TVideo[] = [
  ...LIKED_VIDEOS,
  {
    id: "3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "City Life",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    title: "Underwater World",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Mountain Adventure",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    title: "Space Exploration",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: "7",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Desert Journey",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: "8",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    title: "Forest Hike",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: "9",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Ocean Waves",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: "10",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    title: "Cultural Festivities",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
];
