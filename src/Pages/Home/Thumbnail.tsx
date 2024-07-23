// src/components/Thumbnail.tsx
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { videos } from "src/utils/Api.util";

const Thumbnail = () => {
  return (
    <Grid container spacing={2}>
      {videos.map((video) => (
        <Grid item xs={12} sm={6} md={4} key={video.id}>
          <Card>
            <CardActionArea href={video.videoUrl} target="_blank">
              <CardMedia
                component="img"
                height="140"
                image={video.thubmnailUrl}
                alt={video.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {video.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Thumbnail;
