import { List, ListItem, ListItemText } from "@mui/material";
import { videos } from "src/utils/Api.util";

const LikedView = () => {
  return (
    <List>
      {videos.map((video) => (
        <ListItem
          button
          component="a"
          href={video.videoUrl}
          target="_blank"
          key={video.id}
        >
          <ListItemText primary={video.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default LikedView;
