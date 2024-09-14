import { Box, Card, CardContent, Typography } from "@mui/material";
import { useAppSelector } from "src/Store/hooks";
import { RootState } from "src/Store/store";
export default function Profile() {
  const user = useAppSelector((state: RootState) => state.user);
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={2}>
      <Card sx={{ width: 1000, height: 500 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {user.firstName} Profile
          </Typography>
          <Box mb={2}>
            <Typography variant="body1" color="text.secondary">
              First Name:
            </Typography>
            <Typography variant="body2">{user.firstName}</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body1" color="text.secondary">
              Last Name:
            </Typography>
            <Typography variant="body2">{user.lastName}</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body1" color="text.secondary">
              Email:
            </Typography>
            <Typography variant="body2">{user.email}</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body1" color="text.secondary">
              Password:
            </Typography>
            <Typography variant="body2">{user.password}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
