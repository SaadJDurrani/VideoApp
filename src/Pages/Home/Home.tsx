import { AppBar, Box, Button, CircularProgress, Grid, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "src/Store/hooks";
import { logout } from "src/Store/userSlice";
import { TVideo } from "src/typings/video.type";
import { getallVideos } from "src/utils/Api.util";
import { getLoggedInUser, removeLoggedInUser } from "src/utils/Local.util";
import LikedView from "./LikedView/LikedView";
import Thumbnail from "./Thumbnail";

export default function Home() {
  console.log("Home Rendered");
  const [videos, setVideos] = useState<TVideo[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const fetchVideos = async () => {
    const response = await getallVideos();
    setVideos(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
    const user = getLoggedInUser();
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  function handleLogout() {
    removeLoggedInUser();
    setIsLoggedIn(false);
    dispatch(logout());
  }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Video App
          </Typography>
          {isLoggedIn ? (
            <>
              <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginRight: "1rem" }}>
                Logout
              </Button>
              <Button variant="contained" color="primary" component={Link} to="/profile">
                Profile
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="primary" component={Link} to="/login" style={{ marginRight: "1rem" }}>
                Login
              </Button>
              <Button variant="contained" color="secondary" component={Link} to="/signup">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} md={3} mt={5}>
          {isLoggedIn && <LikedView videos={videos} />}
        </Grid>

        <Grid item container xs={12} md={9} spacing={2}>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100vh">
              <CircularProgress />
            </Box>
          ) : (
            videos.map((v) => (
              <Grid item key={v.id} xs={12} md={3}>
                <Thumbnail video={v} isLoggedIn={isLoggedIn} />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </>
  );
}
