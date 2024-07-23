import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TVideo } from "src/typings/video.type";
import { getVideoById } from "src/utils/Api.util";

export default function Player() {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<TVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true);
      getVideoById(id!)
        .then((videoData) => {
          setVideo(videoData);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <Container>
      {video && (
        <>
          <video controls width="100%">
            <source src={video.videoUrl} type="video/mp4" />
          </video>
          <Typography variant="h4" component="h1" gutterBottom>
            {video.title}
          </Typography>
        </>
      )}
    </Container>
  );
}
