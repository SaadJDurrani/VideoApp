import FavoriteIcon from "@mui/icons-material/Favorite";
import { Checkbox } from "@mui/material";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "src/Store/hooks";
import { RootState } from "src/Store/store";
import { updateLikedVideos } from "src/Store/userSlice";
import { LikedProps } from "src/typings/video.type";
import { updateUserLikedVideosById } from "src/utils/Api.util";

export default function Liked({ videoId }: LikedProps) {
  console.log("Liked Rendered");
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);

  async function handleChange(_e: ChangeEvent<HTMLInputElement>, checked: boolean) {
    if (user) {
      const updatedLikedVideos = checked ? [...user.Liked, videoId] : user.Liked.filter((id: string) => id !== videoId);
      dispatch(updateLikedVideos(updatedLikedVideos));

      await updateUserLikedVideosById(user!._id, updatedLikedVideos);
      // const updatedUser = { ...user, Liked: updatedLikedVideos };
      //  dispatch(updateLikedVideos(updatedLikedVideos));
      // setLoggedInUser(updatedUser);
      // setGlobalArray(updatedLikedVideos);
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
