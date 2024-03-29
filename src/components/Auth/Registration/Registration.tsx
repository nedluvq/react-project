import {
  Stack,
  Card,
  Container,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { FC } from "react";
import { IRegistration } from "./types";
import {Link} from "react-router-dom";
import { buttonStyles } from "../../../styles/buttonStyles";
import {linkStyles} from "../../../styles/linkStyles.ts";
import logo from '../../../assets/logo.png'

export const Registration: FC<IRegistration> = (props) => {
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
          <Box component="form" onSubmit={props.register}>
            <Stack direction="row" spacing={2}>
              <TextField
                placeholder="Aleksand"
                required
                type="name"
                autoComplete="firstName"
                value={props.firstName}
                onChange={(e) => props.setFirstName(e.target.value)}
                sx={{ mt: 1 }}
                fullWidth
              />
              <TextField
                placeholder="Sokolov"
                required
                type="secondName"
                autoComplete="name"
                value={props.secondName}
                onChange={(e) => props.setSecondName(e.target.value)}
                sx={{ mt: 1 }}
                fullWidth
              />
            </Stack>
            <TextField
              placeholder="example@example.org"
              required
              type="email"
              autoComplete="email"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              sx={{ mt: 1 }}
              fullWidth
            />
            <TextField
              required
              type="password"
              autoComplete="new-password"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
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
            <Link to="/signin" style={linkStyles}>
              You already have account?
            </Link>
          </Box>
        </Container>
      </Card>
    </Stack>
  );
};
