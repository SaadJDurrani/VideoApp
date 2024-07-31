import axios from "axios";
import { Base_URL } from "src/MagicStrings/MagicUrl";
import { TLogin, TSignUp, TUser, TVideo } from "../typings/video.type";

export async function getallVideos(): Promise<TVideo[]> {
  const res = await axios.get<TVideo[]>(`${Base_URL}/videos`);
  return res.data;
}
export const getVideoById = async (id: string): Promise<TVideo> => {
  const res = await axios.get<TVideo>(`${Base_URL}/videos/${id}`);
  return res.data;
};
export const getAllUsers = async (): Promise<TUser[]> => {
  const res = await axios.get<TUser[]>(`${Base_URL}/users`);
  return res.data;
};
export const getUserById = async (id: string): Promise<TUser> => {
  const res = await axios.get<TUser>(`${Base_URL}/users/${id}`);
  return res.data;
};
export const updateUserLikedVideosById = async (id: string, LikedVideos: string[]): Promise<void> => {
  console.log(`Updating user with id: ${id} and likedVideos: ${JSON.stringify(LikedVideos)}`);
  await axios.patch(`${Base_URL}/users/${id}`, { Liked: LikedVideos });
};
export const authenticateUser = async (formProps: TLogin): Promise<TUser | null> => {
  const users = await getAllUsers();
  const foundUser = users.find((user) => user.email === formProps.email && user.password === formProps.password);
  return foundUser || null;
};
export async function addUser(formProps: TSignUp) {
  const newUser = {
    ...formProps,
    Liked: [],
  };
  await axios.post(`${Base_URL}/users`, newUser);
  console.log("user added");
}
