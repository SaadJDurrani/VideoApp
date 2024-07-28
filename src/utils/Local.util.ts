import { currentUserKey } from "src/MagicStrings/MagicUrl";
import { TUser } from "src/typings/video.type";

export function setLoggedInUser(user: TUser) {
  return localStorage.setItem(currentUserKey, JSON.stringify(user));
}
export function getLoggedInUser(): TUser | null {
  const userString = localStorage.getItem(currentUserKey);
  if (userString) return JSON.parse(userString);
  return null;
}
export function removeLoggedInUser() {
  localStorage.removeItem(currentUserKey);
}
