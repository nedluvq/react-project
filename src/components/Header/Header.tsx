import { FC } from "react";
import { Button, Stack } from "@mui/material";
import { publicPaths, privatePaths } from "./headerPaths";
import { HeaderLink } from "./HeaderLink";
import { observer } from "mobx-react-lite";
import Auth from "../../store/auth";
import { endSession } from "../../api/auth.service";
import products from "../../store/products";

export const Header: FC = observer(() => {
  const logOut = () => {
    endSession();
    Auth.setAuth();
  };
  return (
    <Stack
      bgcolor="black"
      py={3}
      mb={5}
      direction="row"
      justifyContent="center"
      spacing={2}
      borderRadius="20px 20px 0 0"
    >
      {Auth.isAuth ? (
        <>
          {privatePaths.map((link) => (
            <HeaderLink path={link.path} key={link.title}>
              {link.title.toUpperCase()}
            </HeaderLink>
          ))}
          <HeaderLink path={"/cart"}>Cart: {products.cart.length}</HeaderLink>
          <Button variant="outlined" color="error" onClick={logOut}>
            LOGOUT
          </Button>
        </>
      ) : (
        publicPaths.map((link) => (
          <HeaderLink path={link.path} key={link.title}>
            {link.title.toUpperCase()}
          </HeaderLink>
        ))
      )}
    </Stack>
  );
});
