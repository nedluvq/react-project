import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import simonData from "../store";

export const SimonStartButton = observer(() => {
  return (
    <Button
      onClick={simonData.startGame}
      variant="contained"
      sx={{
        width: "14vw",
        height: "14vw",
        borderRadius: "50%",
        position: "absolute",
        top: "7vw",
        left: "calc(7vw + 2px)",
        fontSize: "1vw",
      }}
    >
      {simonData.data.mainButtonText}
    </Button>
  );
});
