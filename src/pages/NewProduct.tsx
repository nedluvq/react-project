import { ChangeEvent, FormEvent, useState } from "react";
import { UploadProduct } from "../components/UploadProduct/UploadProduct.tsx";
import store from "../store/products.ts";

export const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    avatar: "",
    description: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setData({
      ...data,
      [e.currentTarget.name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.name || !data.price || !data.avatar) {
      return;
    }
    const userData = {
      name: data.name,
      price: data.price,
      avatar: data.avatar,
      description: data.description,
    };
    store.addProduct(userData).catch((err) => alert(err));
    setData({
      name: "",
      price: "",
      avatar: "",
      description: "",
    });
  };

  return (
    <UploadProduct
      name={data.name}
      price={data.price}
      avatar={data.avatar}
      description={data.description}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
