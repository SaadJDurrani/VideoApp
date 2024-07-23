import LikedView from "./LikedView/Likedview";
import Thumbnail from "./Thumbnail";
import { Grid, Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box>
      <h1>Home Page</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Thumbnail />
        </Grid>
        <Grid item xs={12} md={4}>
          <LikedView />
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
