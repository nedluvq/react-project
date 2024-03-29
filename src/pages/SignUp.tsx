import { FormEvent, useState } from "react";

import { Registration } from "../components/Auth/Registration/Registration";
import { useNavigate } from "react-router-dom";
import { createUser, startSession, updateUserData } from "../api/auth.service";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const registerResponse = await createUser(email, password);
      startSession(registerResponse);
      updateUserData(firstName, secondName);
      navigate("/signin");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Registration
      firstName={firstName}
      secondName={secondName}
      email={email}
      password={password}
      setEmail={setEmail}
      setFirstName={setFirstName}
      setPassword={setPassword}
      setSecondName={setSecondName}
      register={register}
    />
  );
};
