import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
  Link,
  Chip,
} from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import store from "../../store/products";
import { IProduct } from "../../interfaces/productInterface";
import { observer } from "mobx-react-lite";

export const ShoppingCartItem: FC<IProduct> = observer((product) => {
  return (
    <Card
      sx={{
        width: 300,
        height: 450,
        border: "0.5px solid black",
        borderRadius: "5%",
      }}
    >
      <CardMedia
        sx={{ height: "50%" }}
        image={product.avatar}
        title={product.name}
      />
      <CardContent>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Link
            component={RouterLink}
            variant="h5"
            to={`/marketplace/${product.id}`}
            color="secondary"
            sx={{ color: "black" }}
            underline="none"
          >
            {product.name}
          </Link>
          <Chip
            color="success"
            label={`${+product.price * (product.quantity || 0)} $`}
            sx={{ width: "50%", fontSize: 20 }}
          />
        </Stack>
      </CardContent>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <CardActions>
          <Button variant="contained" onClick={() => store.decrement(product)}>
            -
          </Button>
          <Button>{product.quantity}</Button>
          <Button variant="contained" onClick={() => store.increment(product)}>
            +
          </Button>
        </CardActions>
        <CardActions>
          <Button
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "white",
              ":hover": { color: "white", backgroundColor: "black" },
            }}
            onClick={() => store.removeFromCart(product)}
          >
            Remove
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
});
