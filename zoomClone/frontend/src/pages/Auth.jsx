import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Auth() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="h-[100vh] justify-center flex items-center">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Paper
            elevation={6}
            sx={{
              marginTop: 8,
              padding: 4,
              borderRadius: 4,
              background:
                "linear-gradient(to right,rgb(43, 39, 48),rgb(95, 35, 16))",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LockOutlinedIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography component="h1" variant="h4">
                Sign In
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3, width: "100%" }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                    sx: { backgroundColor: "white", borderRadius: 1 },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    sx: { backgroundColor: "white", borderRadius: 1 },
                  }}
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    paddingY: 1.5,
                    background: "#fff",
                    color: "#2575fc",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  Sign In
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Typography variant="body2">
                      Don't have an account?{" "}
                      <a href="#" style={{ color: "#fff" }}>
                        Sign Up
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}
