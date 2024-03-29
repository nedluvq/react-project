import { FormEvent, useState } from "react";
import { signInUser, startSession } from "../api/auth.service.ts";
import { Login } from "../components/Auth/Login/Login.tsx";

import { useNavigate } from "react-router-dom";
import Auth from "../store/auth.ts";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const loginResponse = await signInUser(email, password);
      startSession(loginResponse);
      navigate("/marketplace");
      Auth.setAuth();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <Login
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      login={login}
    />
  );
};
