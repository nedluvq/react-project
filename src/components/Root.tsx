import { Stack } from "@mui/material";
import { FC } from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";

export const Root: FC = () => (
  <Stack
    sx={{ border: "1px solid black", borderRadius: "20px" }}
    pb={5}
  >
    <Header />
    <Outlet />
  </Stack>
);
