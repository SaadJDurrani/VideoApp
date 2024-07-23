import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { TVideo } from "src/typings/video.type";

function Thumbnail(video: TVideo) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/player/${video.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={video.thumbnailUrl}
          alt={video.title}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {video.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Thumbnail;
