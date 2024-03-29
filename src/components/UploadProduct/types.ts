import { ChangeEvent, FormEvent } from "react";

export default interface IUpload {
  name: string;
  price: string;
  avatar: string;
  description: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
