import FavoriteIcon from "@mui/icons-material/Favorite";
import { Checkbox } from "@mui/material";
import { ChangeEvent } from "react";
import { GlobalArray, LikedProps } from "src/typings/video.type";
import { updateUserLikedVideosById } from "src/utils/Api.util";
import { getLoggedInUser, setLoggedInUser } from "src/utils/Local.util";

interface LikedComponentProps extends LikedProps, GlobalArray {}

export default function Liked({ videoId, setGlobalArray }: LikedComponentProps) {
  console.log("Liked Rendered");
  const user = getLoggedInUser();

  function handleChange(_e: ChangeEvent<HTMLInputElement>, checked: boolean): void {
    if (user) {
      const updatedLikedVideos = checked ? [...user.Liked, videoId] : user.Liked.filter((id: string) => id !== videoId);

      updateUserLikedVideosById(user!.id, updatedLikedVideos).then(() => {
        const updatedUser = { ...user, Liked: updatedLikedVideos };
        setLoggedInUser(updatedUser);
        setGlobalArray(updatedLikedVideos);
      });
    }
  }
  if (!user) return <></>;
  return (
    <Checkbox
      checked={user.Liked.includes(videoId)}
      onChange={handleChange}
      icon={<FavoriteIcon />}
      checkedIcon={<FavoriteIcon color="error" />}
    />
  );
}
