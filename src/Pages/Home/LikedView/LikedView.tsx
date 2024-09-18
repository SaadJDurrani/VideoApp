import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "src/Store/hooks";
import { RootState } from "src/Store/store";
import { TVideo } from "src/typings/video.type";
interface HomeProps {
  videos: TVideo[];
}

const LikedView = ({ videos }: HomeProps) => {
  console.log("LikedView Rendered");
  const userLiked = useAppSelector((state: RootState) => state.user.Liked);

  const filteredVideos = videos.filter((video) => userLiked.includes(video._id));
  const navigate = useNavigate();
  function handleVideoClick(videoId: String) {
    navigate(`/player/${videoId}`);
  }

  return (
    <>
      <h1>Liked Videos</h1>
      <List>
        {filteredVideos.map((video) => (
          <ListItem key={video._id} style={{ display: "flex", alignItems: "center" }}>
            <ListItemButton onClick={() => handleVideoClick(video._id)}>
              <img src={video.thumbnailUrl} alt={video.title} style={{ width: 100, height: 60, marginRight: 16 }} />
              <ListItemText primary={video.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default LikedView;
