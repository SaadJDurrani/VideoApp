import { TVideo } from "src/typings/video.type";

export default function Liked(video: TVideo) {
  return (
    <>
      <h5>{video.title}</h5>
    </>
  );
}
