import { Button } from "@mui/material";

type SimonButtonProps = {
  radius: object;
  color: string;
  onClick: (color: string) => void;
};

export const SimonButton = ({ onClick, radius, color }: SimonButtonProps) => {
  return (
    <Button
      onClick={() => onClick(color)}
      variant="contained"
      sx={{
        width: "14vw",
        height: "14vw",
        display: "inline-block",
        margin: "2px",
        ...radius,
        backgroundColor: color,
        ":hover": {
          backgroundColor: color,
        },
      }}
    />
  );
};
