import { makeAutoObservable } from "mobx";
import { isLoggedIn } from "../api/auth.service";

class Authorization {
  isAuth = !!isLoggedIn();

  constructor() {
    makeAutoObservable(this);
  }
  setAuth() {
    this.isAuth = !!isLoggedIn();
  }
}
export default new Authorization();
