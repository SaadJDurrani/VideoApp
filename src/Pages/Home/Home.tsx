import { Grid } from "@mui/material";
import { getallVideos, VIDEOS } from "src/utils/Api.util";
import LikedView from "./LikedView/LikedView";
import Thumbnail from "./Thumbnail";
import { useEffect, useState } from "react";
import { TVideo } from "src/typings/video.type";



export default function Home() {
  const [video,setVideo]=useState<TVideo[]>([])
  const fetchVideos= async()=>{

    const response= await getallVideos()
    setVideo(response)
  }
useEffect(() => {
  fetchVideos()
}, []);

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12} md={3}>
        <LikedView />
      </Grid>
      <Grid item container xs={12} md={9} spacing={2}>
        {video.map((v) => (
          <Grid item key={v.id} xs={12} md={3}>
            <Thumbnail {...v} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
