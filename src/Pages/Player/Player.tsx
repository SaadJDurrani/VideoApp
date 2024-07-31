import { Container, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "src/Store/hooks";
import { RootState } from "src/Store/store";
import { getVideoByIdAsync } from "src/Store/videosSlice";
import Liked from "../Home/LikedView/Liked";

export default function Player() {
  console.log("Player rendered");
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { video, status } = useSelector((state: RootState) => state.videos);

  useEffect(() => {
    dispatch(getVideoByIdAsync(id!));
  }, []);

  return (
    <Container>
      {status === "loading" ? (
        <Skeleton height={"70vh"} sx={{ m: 4 }} />
      ) : video ? (
        <>
          <video controls width="100%">
            <source src={video.videoUrl} type="video/mp4" />
          </video>
          <Typography variant="h4" component="h1" gutterBottom>
            {video.title}
          </Typography>
          <Liked videoId={id!} />
        </>
      ) : (
        "error"
      )}
    </Container>
  );
}
