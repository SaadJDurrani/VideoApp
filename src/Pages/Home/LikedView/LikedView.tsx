import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GlobalArray, TVideo } from "src/typings/video.type";
import { getLoggedInUser } from "src/utils/Local.util";
interface HomeProps extends GlobalArray {
  videos: TVideo[];
}

const LikedView = ({ videos }: HomeProps) => {
  console.log("LikedView Rendered");
  const user = getLoggedInUser();

  const filteredVideos = videos.filter((video) => user?.Liked.includes(video.id));
  const navigate = useNavigate();
  function handleVideoClick(videoId: String) {
    navigate(`/player/${videoId}`);
  }

  return (
    <>
      <h1>Liked Videos</h1>
      <List>
        {filteredVideos.map((video) => (
          <ListItem key={video.id} style={{ display: "flex", alignItems: "center" }}>
            <ListItemButton onClick={() => handleVideoClick(video.id)}>
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
