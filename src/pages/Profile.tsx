import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../api/auth.service.ts";
import ProfileComponent from "../components/Profile/ProfileComponent.tsx";
export const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setFirstName(user?.displayName?.split(" ")[0] as string);
      setLastName(user?.displayName?.split(" ")[1] as string);
      setPhotoURL(user?.photoURL as string);
      setEmail(user?.email as string);
    });
  }, []);
  return (
    <ProfileComponent
      photoURL={photoURL}
      firstName={firstName}
      lastName={lastName}
      email={email}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setPhotoURL={setPhotoURL}
    />
  );
};
