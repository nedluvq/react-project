import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import IGamesCard from "./types";
import { Link as RouterLink } from "react-router-dom";
const GamesCard: FC<IGamesCard> = ({ desc, image, name }) => {
  console.log(`./${name}`);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Card
        sx={{
          width: 600,
          height: 650,
          border: "0.5px solid black",
          borderRadius: "5%",
        }}
      >
        <CardMedia
          sx={{ height: "55%", width: "100%"}}
          image={image}
          title={name}
        />
        <CardContent>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            spacing={5}
          >
            <Typography variant="h5">{name}</Typography>
            <Typography>{desc}</Typography>
            <Button
              component={RouterLink}
              to={`./${name}`}
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                ":hover": {
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid white",
                },
              }}
            >
              Play
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default GamesCard;
