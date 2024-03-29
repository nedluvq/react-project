import { Box, Typography } from "@mui/material";
import { FC } from "react";
import simonData from "./store";
import { observer } from "mobx-react-lite";
import { SimonButton, SimonStartButton } from "./UI";

export const SimonGame: FC = observer(() => {
  return (
    <Box margin={"2vh auto"} position={"relative"}>
      <Box>
        <SimonButton
          onClick={simonData.onColorClick}
          radius={{ borderTopLeftRadius: "100%" }}
          color={simonData.data.isActive.green ? "#ffffff" : "green"}
        />
        <SimonButton
          onClick={simonData.onColorClick}
          radius={{ borderTopRightRadius: "100%" }}
          color={simonData.data.isActive.red ? "#ffffff" : "red"}
        />
      </Box>
      <Box>
        <SimonButton
          onClick={simonData.onColorClick}
          radius={{ borderBottomLeftRadius: "100%" }}
          color={simonData.data.isActive.yellow ? "#ffffff" : "yellow"}
        />
        <SimonButton
          onClick={simonData.onColorClick}
          radius={{ borderBottomRightRadius: "100%" }}
          color={simonData.data.isActive.blue ? "#ffffff" : "blue"}
        />
      </Box>
      <SimonStartButton />
      <Typography textAlign={"center"} mt={"20px"} fontSize={"30px"}>
        {simonData.data.isUserMove ? "Your turn" : "Game Turn"}
        <br />
        Round: {simonData.data.currentRound}
      </Typography>
    </Box>
  );
});
