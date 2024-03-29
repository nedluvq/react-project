import { FC } from "react";
import { IProduct } from "../../interfaces/productInterface.ts";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export const PrerenderCard: FC<IProduct> = (product) => {
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
          <Typography variant="h5">{product.name}</Typography>
          <Chip
            color="success"
            label={`${product.price} $`}
            sx={{ width: "50%", fontSize: 20 }}
          />
          <Typography>{product.description}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
