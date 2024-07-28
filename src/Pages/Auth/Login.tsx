import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TLogin } from "src/typings/video.type";
import { authenticateUser } from "src/utils/Api.util";
import { setLoggedInUser } from "src/utils/Local.util";

export default function Login() {
  const navigate = useNavigate();

  async function submitHandler(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData) as TLogin;

    const found = await authenticateUser(formProps);

    if (found) {
      setLoggedInUser(found);
      navigate(new URLSearchParams(window.location.search).get("from") || "/");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={submitHandler} action="dialog">
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6">Login Form</Typography>

            <Grid mt={2} container direction="column" spacing={2}>
              <Grid>
                <TextField required color="secondary" size="small" name="email" type="email" placeholder="Email" />
              </Grid>
              <Grid>
                <TextField
                  required
                  size="small"
                  name="password"
                  type="password"
                  color="secondary"
                  placeholder="Password"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", p: 4 }}>
            <Button size="small" variant="contained" color="primary" type="submit">
              Login
            </Button>
            <Button size="small" variant="contained" color="secondary" type="submit" component={Link} to="/signup">
              SignUp
            </Button>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
}
