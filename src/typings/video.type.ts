import { ReactNode } from "react";

export type TVideo = {
  Liked: never[];
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
};
export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  Liked: Array<string>;
};
export type TLogin = Pick<TUser, "email" | "password">;
export type TSignUp = Pick<TUser, "firstName" | "lastName" | "email" | "password">;
export type LikedProps = {
  videoId: string;
};
export type GuardProp = {
  children: ReactNode;
};
