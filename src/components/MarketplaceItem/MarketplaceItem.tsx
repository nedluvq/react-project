import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
  Link,
  Chip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import store from "../../store/products";
import { IProduct } from "../../interfaces/productInterface";
import { observer } from "mobx-react-lite";
import auth from "../../store/auth";

import { buttonStyles } from "../../styles/buttonStyles.ts";

export const MarketplaceItem: FC<IProduct> = observer((product) => {
  return (
    <Card
      sx={{
        width: 300,
        height: 550,
        pb: 2,
        border: "1px solid black",
        borderRadius: "5%",
      }}
    >
      <CardMedia
        sx={{ height: 250 }}
        image={product.avatar}
        title={product.name}
      />
      <CardContent>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Link
            component={RouterLink}
            to={`/marketplace/${product.id}`}
            underline="none"
            variant="h5"
          >
            {product.name}
          </Link>
          <Chip
            color="success"
            label={`${product.price} $`}
            sx={{ width: "50%", fontSize: 20 }}
          />
          <Typography>{product.description}</Typography>
        </Stack>
      </CardContent>
      {auth.isAuth && (
        <Stack direction="column" justifyContent="center" alignItems="center">
          <CardActions>
            <Button
              variant="contained"
              sx={buttonStyles}
              onClick={() => store.addToCart(product)}
            >
              Add to cart
            </Button>
          </CardActions>
        </Stack>
      )}
    </Card>
  );
});
