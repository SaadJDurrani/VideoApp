import { Button, Container, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetVideoByIdQuery } from "src/Store/videos/videoAPI";
import Liked from "../Home/LikedView/Liked";

export default function Player() {
  console.log("Player rendered");
  const { id } = useParams<{ id: string }>();
  const { data: video, isFetching, isError, refetch } = useGetVideoByIdQuery(id!);
  // const [uploadVideo, { isLoading, data }] = useUploadVideoMutation();

  return (
    <Container>
      {isFetching ? (
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
        isError && <Button onClick={refetch}>Refetch</Button>
      )}
      {/* <Button
        onClick={() => {
          uploadVideo({ thumbnailUrl: "", title: "", videoUrl: "" });
        }}
        variant="contained"
        color="secondary"
      >
        Upload Video
      </Button> */}
    </Container>
  );
}
