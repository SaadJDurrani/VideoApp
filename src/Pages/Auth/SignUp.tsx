import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TSignUp } from "src/typings/video.type";
import { addUser } from "src/utils/Api.util";
export default function SignUp() {
  const navigate = useNavigate();
  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData) as TSignUp;
    // const existingUsers = getAllUsers()

    addUser(formProps);

    navigate("/");

    console.log(formProps);
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={submitHandler} action="dialog">
        <Card>
          <CardContent>
            <Typography variant="h6">SignUp Form</Typography>

            <Grid mt={2} container direction="column" spacing={2}>
              <Grid>
                <TextField
                  color="secondary"
                  required
                  size="small"
                  name="FirstName"
                  type="text"
                  placeholder="First Name"
                />
              </Grid>
              <Grid>
                <TextField
                  required
                  color="secondary"
                  size="small"
                  name="LastLame"
                  type="text"
                  placeholder="Last Name"
                />
              </Grid>
              <Grid>
                <TextField required color="secondary" size="small" name="email" type="email" placeholder="email" />
              </Grid>
              <Grid>
                <TextField
                  required
                  color="secondary"
                  size="small"
                  name="password"
                  type="password"
                  placeholder="password"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button size="small" variant="contained" color="primary" type="submit">
              SignUp
            </Button>
            <Button size="small" variant="contained" color="secondary" type="submit" component={Link} to="/login">
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
}
