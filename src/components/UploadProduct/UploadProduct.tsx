import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import IUpload from "./types.ts";
import { buttonStyles } from "../../styles/buttonStyles.ts";
import { PrerenderCard } from "../PrerenderUploadCard/PrerenderCard.tsx";

export const UploadProduct: FC<IUpload> = (props) => {
  return (
    <Stack direction="column" alignItems="center">
      <Card sx={{ width: 600, padding: 10 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Upload Product
        </Typography>
        <form onSubmit={props.handleSubmit}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <PrerenderCard
              name={props.name}
              price={props.price}
              id="1"
              avatar={props.avatar}
              description={props.description}
            />
            <Stack direction={"column"} alignItems={"center"} spacing={9}>
              <TextField
                required
                label="Product Name"
                type="name"
                name="name"
                value={props.name}
                onChange={props.handleChange}
              />
              <TextField
                required
                label="Description"
                type="description"
                name="description"
                value={props.description}
                onChange={props.handleChange}
              />
              <TextField
                required
                label="Price"
                type="number"
                name="price"
                value={props.price}
                onChange={props.handleChange}
              />
              <TextField
                required
                label="Product picture URL"
                type="avatar"
                name="avatar"
                value={props.avatar}
                onChange={props.handleChange}
              />
              <Button variant="outlined" type="submit" sx={buttonStyles}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </form>
      </Card>
    </Stack>
  );
};
