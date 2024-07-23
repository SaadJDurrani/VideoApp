import { Grid } from "@mui/material";
import { VIDEOS } from "src/utils/Api.util";
import LikedView from "./LikedView/LikedView";
import Thumbnail from "./Thumbnail";

export default function Home() {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12} md={3}>
        <LikedView />
      </Grid>
      <Grid item container xs={12} md={9} spacing={2}>
        {VIDEOS.map((v) => (
          <Grid item xs={12} md={3}>
            <Thumbnail {...v} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
