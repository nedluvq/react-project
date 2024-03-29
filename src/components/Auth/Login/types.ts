import { FormEvent } from "react";

export interface ILogin {
  email: string;
  password: string;
  setEmail: (e: React.SetStateAction<string>) => void;
  setPassword: (e: React.SetStateAction<string>) => void;
  login: (e: FormEvent<HTMLInputElement>) => void;
}
