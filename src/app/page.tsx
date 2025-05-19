import { Box, Button, Container, Paper, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';


export default function Home() {

  const styled = {
    mainContent: {
      color: "#ffffff",
      backgroundColor: "#000000",
    },
  }

  return (
    <div>
      <Container maxWidth="md" sx={{
        mt: 16,
      }}>
        <Paper elevation={6}>
          <Box sx={
            {
              background: "radial-gradient(circle at 0% 0%, rgb(24, 28, 72) 56%, rgb(255, 207, 203) 100%)",
              textAlign: "center",
              p: 4,
              color: "white",
            }
          }>
            <Typography variant="h1" gutterBottom sx={{
              fontSize: {
                xs: "3rem",
                sm: "5rem",
              }
            }}>
              Welcome to my website!
            </Typography>
            <Typography variant="h2" gutterBottom sx={{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
              }
            }}>
              Pleased to satisfy over 1.000 customers
            </Typography>
            <Button variant="contained" size="large" color="error" startIcon={<LoginIcon />}>
              Login
            </Button>
          </Box>
          <Box sx={styled.mainContent}>
              <Typography variant="h4" padding={2}>This is the second Box</Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
