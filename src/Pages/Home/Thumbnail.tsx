import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { TVideo } from "src/typings/video.type";
import Liked from "./LikedView/Liked";
interface ThumbnailProps {
  video: TVideo;
  isLoggedIn: boolean;
}
function Thumbnail({ video, isLoggedIn }: ThumbnailProps) {
  console.log("Thumbnail");
  return (
    <Card>
      <CardActionArea component={Link} to={`/player/${video._id}`}>
        <CardMedia component="img" height="140" image={video.thumbnailUrl} alt={video.title} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {video.title}
        </Typography>
        {isLoggedIn && <Liked videoId={video._id} />}
      </CardContent>
    </Card>
  );
}

export default Thumbnail;
