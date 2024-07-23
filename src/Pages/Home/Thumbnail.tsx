// src/components/Thumbnail.tsx
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { TVideo } from "src/typings/video.type";

const Thumbnail = (video: TVideo) => {
  return (
    <Card>
      <CardActionArea href={video.videoUrl} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={video.thumbnailUrl}
          alt={video.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {video.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Thumbnail;
