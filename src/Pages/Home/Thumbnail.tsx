import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GlobalArray, TVideo } from "src/typings/video.type";
import Liked from "./LikedView/Liked";
interface ThumbnailProps extends GlobalArray {
  video: TVideo;
}
function Thumbnail({ video, globalArray, setGlobalArray }: ThumbnailProps) {
  console.log("Thumbnail");
  return (
    <Card>
      <CardActionArea component={Link} to={`/player/${video.id}`}>
        <CardMedia component="img" height="140" image={video.thumbnailUrl} alt={video.title} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {video.title}
        </Typography>
        <Liked videoId={video.id} globalArray={globalArray} setGlobalArray={setGlobalArray} />
      </CardContent>
    </Card>
  );
}

export default Thumbnail;
