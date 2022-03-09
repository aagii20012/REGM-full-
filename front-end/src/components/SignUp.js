import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const VALIDATION = gql`
  mutation SignUp($first_name: String!, 
    $last_name:String!, 
    $email: String!, 
    $password: String!){
      createUser(first_name:$first_name
      last_name:$last_name
      email:$email
      isAdmin:false
      password:$password) {
      _id
    }
  }
`;

export default function SignUp() {
  let navigate = useNavigate();
  const [SignUp, { data, loading, mutationError }] = useMutation(VALIDATION);
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  if (loading) console.log(loading)
  if (mutationError) console.log(mutationError);
  if(data){
    localStorage.setItem('tokenIsId', data.createUser["_id"]);
    navigate("/")
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    setError((prevState) => ({
      ...prevState,
      firstName: data.get("firstName") === "",
      lastName: data.get("lastName") === "",
      email:
        data.get("email") === "" ||
        !/.+@.+\.[A-Za-z]+$/.test(data.get("email")),
      password: data.get("password") === "",
    }));
    let hasError =
      error.firstName || error.lastName || error.email || error.password;

    if (!hasError) {
      SignUp({
        variables: {
          first_name: data.get("firstName"),
          last_name: data.get("lastName"),
          email: data.get("email"),
          password: data.get("password"),
        },
      });
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  error={error.firstName}
                  helperText={error.firstName && "Please enter firstname!"}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  error={error.lastName}
                  helperText={error.lastName && "Please enter Lastname"}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  error={error.email}
                  helperText={error.email && "Wrong Email"}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={error.password}
                  helperText={error.password && "Please enter Password"}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
