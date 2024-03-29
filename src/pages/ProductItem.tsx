import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import store from "../store/products";
import auth from "../store/auth.ts";
import {
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import products from "../store/products";
import { IProduct } from "../interfaces/productInterface";
import { buttonStyles } from "../styles/buttonStyles.ts";
export const ProductItem: FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setProduct] = useState<IProduct>({
    id: "",
    name: "",
    price: "",
    avatar: "",
    description: "",
    quantity: 0,
  });

  useEffect(() => {
    if (store.productList.length == 0) navigate("/");
    setProduct(store.getProduct(Number(productId) - 1));
  }, []);

  return (
    <Card
      sx={{
        maxWidth: "25%",
        margin: "auto",
        borderRadius: "5%",
        padding: "20px",
      }}
    >
      <Stack spacing={3}>
        <CardMedia
          component="img"
          image={product.avatar}
          alt={product.name}
          sx={{ objectFit: "contain" }}
        />
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Typography gutterBottom variant="h4">
            {product.name}
          </Typography>
          <Chip
            color="success"
            label={`${product.price} $`}
            sx={{ width: "25%", fontSize: 20 }}
          />
          <Typography variant="body2" color="text.secondary" padding="0 20%">
            {product.description}
          </Typography>
        </Stack>
        <ButtonGroup
          aria-label="text button group"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {auth.isAuth && (
            <Button
              variant="contained"
              sx={buttonStyles}
              onClick={() => products.addToCart(product)}
            >
              Add to Card
            </Button>
          )}
        </ButtonGroup>
      </Stack>
    </Card>
  );
};
