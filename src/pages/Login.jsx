import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";

import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword();
  const avatar = useFileHandler("single", 2);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{backgroundImage:"linear-gradient(rgba(200,200,200,0.2), rgba(120,110,220,0.7))"}}>
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                fullWidth
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                fullWidth
                variant="text"
                color="secondary"
                onClick={toggleLogin}
              >
                Regsiter Now
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignup}
            >
              <Stack position={"relative"} width={"5rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
                {avatar.error && (
                  <Typography color={"error"} variant="caption">
                    {avatar.error}
                  </Typography>
                )}
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    bgcolor: "rgba(255,255,255,0.5)",
                    ":hover": {
                      bgcolor: "rgba(255,255,255,0.8)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color={"error"} variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color={"error"} variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                fullWidth
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign up
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                fullWidth
                variant="text"
                color="secondary"
                onClick={toggleLogin}
              >
                Login Here
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;
