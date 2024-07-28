import { Navigate } from "react-router-dom";
import { currentUserKey } from "src/MagicStrings/MagicUrl";
import { GuardProp } from "src/typings/video.type";

export default function Guard({ children }: GuardProp) {
  const loggedInUsersString = localStorage.getItem(currentUserKey);
  if (loggedInUsersString) return children;
  return <Navigate to={`/login?from=${window.location.pathname}`} replace />;
}
