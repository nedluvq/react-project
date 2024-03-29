import { Box, Stack, Typography } from "@mui/material";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import { FC } from "react";
import IProfile from "./types.ts";

import ProfileModal from "./ProfileModal/ProfileModal.tsx";

const Profile: FC<IProfile> = (props) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {props.photoURL ? (
        <Box
          component="img"
          src={props.photoURL}
          sx={{
            width: "10rem",
            height: "10rem",
            border: "1px solid black",
            borderRadius: "50%",
          }}
        />
      ) : (
        <NoAccountsIcon sx={{ fontSize: 150 }} />
      )}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Typography
          sx={{ color: "black" }}
          variant="h5"
          gutterBottom
          textAlign="center"
        >
          {`${props.firstName} ${props.lastName}`}
        </Typography>
        <Typography>{props.email}</Typography>
        <ProfileModal
          photoURL={props.photoURL}
          firstName={props.firstName}
          lastName={props.lastName}
          email={props.email}
          open={props.open}
          handleOpen={props.handleOpen}
          handleClose={props.handleClose}
          setFirstName={props.setFirstName}
          setLastName={props.setLastName}
          setPhotoURL={props.setPhotoURL}
        />
      </Stack>
    </Stack>
  );
};

export default Profile;
