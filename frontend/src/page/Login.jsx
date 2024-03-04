import {
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Container,
  Box,
} from "@mui/material";

function Login() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5" gutterBottom>
              Bienvenido nuevamente
            </Typography>
            <Typography variant="body1" gutterBottom>
              Coloque sus credenciales por favor
            </Typography>
          </Box>

          <Box elevation={3} style={{ padding: 20 }} width={350}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField label="Usuario" variant="outlined" fullWidth />
              </Grid>
              <Grid item>
                <TextField label="Contraseña" variant="outlined" fullWidth />
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
