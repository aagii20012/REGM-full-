import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { gql, useLazyQuery } from "@apollo/client";
import { Alert } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const VALIDATION = gql`
  query ($email: String!, $password: String!) {
    getUser(email: $email, password: $password) {
      _id
    }
  }
`;

function Login() {
  let navigate = useNavigate();
  const [Login, { data, loading, error }] = useLazyQuery(VALIDATION);
  const [errorMessage, setErrorMessage] = React.useState("");

  if (loading) console.log("loading");
  if (data) {
    localStorage.setItem('tokenIsId', data.getUser["_id"]);
    navigate("/")
  }
  if (error) {
    console.log("error is", error.message);
    setErrorMessage(error.message);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formValue = new FormData(event.currentTarget);
    if (formValue.get("email") && formValue.get("password")) {
      Login({
        variables: {
          email: formValue.get("email"),
          password: formValue.get("password"),
        },
      });
    } else {
      setErrorMessage("Please enter email and password");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {errorMessage && (
            <Alert variant="outlined" severity="error">
              {errorMessage}
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
