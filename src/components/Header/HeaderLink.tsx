import { Button } from "@mui/material";
import { FC, ReactNode } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";

export const HeaderLink: FC<{ children: ReactNode; path: string }> = ({
  children,
  path,
}) => {
  const activePage = useLocation();
  return (
    <Button
      sx={
        path == activePage.pathname
          ? {
              color: "black",
              backgroundColor: "white",
              border: "1px solid black ",
            }
          : {
              color: "white",
              backgroundColor: "black",
              border: "1px solid white",
            }
      }
      variant={path == activePage.pathname ? "contained" : "outlined"}
      component={RouterLink}
      to={path}
    >
      {children}
    </Button>
  );
};
