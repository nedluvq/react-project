import { Stack } from "@mui/material";
import { gamesData } from "../staticData/gamesData";
import GamesCard from "../components/GamesCard/GamesCard.tsx";
export const Games = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {gamesData.map((game) => (
        <GamesCard
          key={game.id}
          id={game.id}
          name={game.name}
          image={game.image}
          desc={game.desc}
        />
      ))}
    </Stack>
  );
};
