import { Alert, Box, Grid } from "@mui/material";

import store from "../store/products";
import { ShoppingCartItem } from "../components/ShoppingCartItem/ShoppingCartItem";
import { observer } from "mobx-react-lite";

export const ShoppingCart = observer(() => {
  const sum = store.getCartSum();

  return (
    <>
      {store.cart.length ? (
        <>
          <Box
            sx={{
              backgroundColor: "green",
              mt: "-40px",
              mb: "2vh",
              fontSize: "40px",
              width: "100%",
              textAlign: "center",
              py: "2vh",
              color: "#fff",
            }}
          >
            Total: {sum}$
          </Box>
          <Grid
            justifyContent="center"
            alignItems="center"
            spacing={3}
            container
            direction="row"
          >
            {store.cart.map((product) => (
              <Grid key={product.id} item>
                <ShoppingCartItem {...product} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Alert sx={{ alignSelf: "center" }} severity="info">
          No products in cart
        </Alert>
      )}
    </>
  );
});
