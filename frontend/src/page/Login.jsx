import {
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Container,
  Link,
  Box,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { loginRequest } from "../api/auth";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © Website "}

      {/* <Link color="inherit" href="https://mui.com/"> */}
      {/* </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Login() {
  const { register, handleSubmit } = useForm();

  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  const onSubmit = async (data) => {
    const jwt = await loginRequest(data);
    localStorage.setItem("token", jwt.data.token);
    setIsAuth();
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1709603945846-6901ed447ecd?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
              Ingrese sus credenciales
            </Typography>
          </Box>

          <Box
            component="form"
            sx={{ mt: 1 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              margin="normal"
              // required
              fullWidth
              id="email"
              label="Usuario"
              {...register("username", { required: true })}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              type="password"
              id="password"
              label="Contraseña"
              {...register("password", { required: true })}
              autoComplete="email"
              autoFocus
            />

            {/* <Button variant="contained" color="primary">
              Login
            </Button> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Inicar sesión
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
