import { useEffect, useState } from "react";
import { MarketplaceItem } from "../components/MarketplaceItem/MarketplaceItem";
import { Alert, CircularProgress, Grid } from "@mui/material";
import store from "../store/products";

export const Marketplace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    store
      .fetchProducts()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {!isLoading ? (
        store.productList.map((product) => (
          <Grid item key={product.id}>
            <MarketplaceItem {...product} />
          </Grid>
        ))
      ) : !isError ? (
        <CircularProgress size={100} />
      ) : (
        <Alert severity="error">Request failed with status code 404!</Alert>
      )}
    </Grid>
  );
};
