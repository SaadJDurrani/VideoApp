import { currentUserKey } from "src/MagicStrings/MagicUrl";
import { TUser } from "src/typings/video.type";

export function setLoggedInUser(user: TUser) {
  localStorage.setItem(currentUserKey, JSON.stringify({ id: user._id, email: user.email }));
}
export function getLoggedInUser(): TUser | null {
  const userString = localStorage.getItem(currentUserKey);
  if (userString && userString !== "undefined") return JSON.parse(userString);
  return null;
}
export function removeLoggedInUser() {
  localStorage.removeItem(currentUserKey);
}
export function getCurrentUserId(): string | null {
  const userString = localStorage.getItem(currentUserKey);
  return userString ? JSON.parse(userString).id : null;
}
