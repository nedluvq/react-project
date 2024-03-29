import { FormEvent } from "react";

export interface IRegistration {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  setFirstName: (e: React.SetStateAction<string>) => void;
  setSecondName: (e: React.SetStateAction<string>) => void;
  setEmail: (e: React.SetStateAction<string>) => void;
  setPassword: (e: React.SetStateAction<string>) => void;
  register: (e: FormEvent<HTMLInputElement>) => void;
}
