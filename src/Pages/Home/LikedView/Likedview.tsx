import { List } from "@mui/material";
import { LIKED_VIDEOS } from "src/utils/Api.util";
import Liked from "./Liked";

const LikedView = () => {
  return (
    <List>
      {LIKED_VIDEOS.map((video) => (
        <Liked {...video} />
      ))}
    </List>
  );
};

export default LikedView;
