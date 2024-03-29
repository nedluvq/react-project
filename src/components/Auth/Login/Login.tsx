import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ILogin } from "./types";
import {buttonStyles} from "../../../styles/buttonStyles.ts";
import {linkStyles} from "../../../styles/linkStyles.ts";
import logo from '../../../assets/logo.png'

export const Login: FC<ILogin> = (props) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Card
        sx={{
          padding: 10,
          paddingBottom: 10,
          borderRadius: "20px",
        }}
      >
        <Container maxWidth="xs" sx={{ mt: 2 }}>
          <Box
              component='img'
              src={logo}
              sx={{
                marginLeft: 5,
                marginBottom: 5
              }}
          />
          <Box component="form" onSubmit={props.login}>
            <TextField
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              label='Email'
              required
              type="email"
              autoComplete="email"
              sx={{ mt: 1 }}
              fullWidth
            />
            <TextField
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
              required
              label='Password'
              type="password"
              autoComplete="new-password"
              sx={{ mt: 3 }}
              fullWidth
            />
            <Button
              variant="contained"
              type="submit"
              sx={buttonStyles}
              fullWidth
            >
              Login
            </Button>
            <Link
                to="/signup"
                style={linkStyles}
            >
              Don't have account?
            </Link>
          </Box>
        </Container>
      </Card>
    </Stack>
  );
};
