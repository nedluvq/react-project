import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IProduct } from "../interfaces/productInterface";
import { mockApi } from "../apiKey/apiKey";

class Store {
  productList: IProduct[] = [];
  cart: IProduct[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  fetchProducts = async () => {
    await axios
      .get(`${mockApi}/products`)
      .then((response) => (this.productList = response.data));
  };
  getProduct = (id: number) => {
    return this.productList[id];
  };
  addToCart = (product: IProduct) => {
    if (this.cart.length) {
      let productExist = false;
      this.cart.find((item) => {
        if (item.id === product.id) {
          productExist = true;
          item.quantity += 1;
        }
      });
      if (!productExist) {
        this.cart.push({ ...product, quantity: 1 });
      }
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  };
  removeFromCart = (product: IProduct) => {
    this.cart = this.cart.filter((prods) => prods.id !== product.id);
  };
  increment = (product: IProduct) => {
    this.cart = this.cart.map((prods) => {
      return prods.id === product.id
        ? { ...prods, quantity: prods.quantity + 1 }
        : prods;
    });
  };
  decrement = (product: IProduct) => {
    this.cart = this.cart.map((prods) => {
      return prods.id === product.id && product.quantity > 1
        ? { ...prods, quantity: prods.quantity - 1 }
        : prods;
    });
  };
  getCartSum = () => {
    const sum = this.cart.map((item: IProduct) => +item.price * item.quantity);
    return sum.reduce((acc, item) => acc + item, 0) || 0;
  };
  addProduct = async (userData: {
    name: string;
    price: string;
    avatar: string;
    description: string;
  }) => {
    await axios.post(
      `${mockApi}/products`,
      userData
    );
  };
}
export default new Store();
