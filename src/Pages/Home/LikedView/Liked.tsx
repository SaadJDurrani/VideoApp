import { TVideo } from "src/typings/video.type";

export default function Liked(video: TVideo) {
  return (
    <>
      <h1>{video.title}</h1>
    </>
  );
}
