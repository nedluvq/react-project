import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";

import { Root } from "../components/Root.tsx";
import { PrivateRoutes, PublicRoutes } from "./routes.ts";
import Auth from "../store/auth.ts";
import { observer } from "mobx-react-lite";
import {
  CalendarPage,
  Games,
  Marketplace,
  NewProduct,
  ProductItem,
  ShoppingCart,
  SignIn,
  SignUp,
  ProfilePage,
} from "../pages";
import { SimonGame } from "../games";
import App from "../games/SnakeGame/App.tsx";

export const AppRouter = observer(() => (
  <BrowserRouter>
    {Auth.isAuth ? (
      <Routes>
        <Route element={<Root />}>
          <Route path={PrivateRoutes.MARKETPLACE} element={<Marketplace />} />
          <Route path={PrivateRoutes.PRODUCTDETAIL} element={<ProductItem />} />
          <Route path={PrivateRoutes.CALENDAR} element={<CalendarPage />} />
          <Route path={PrivateRoutes.GAMES} element={<Games />} />
          <Route
            path={`${PrivateRoutes.GAMES}/SimonGame`}
            element={<SimonGame />}
          />
          <Route path={`${PrivateRoutes.GAMES}/SnakeGame`} element={<App />} />
          <Route path={PrivateRoutes.SHOPPINGCART} element={<ShoppingCart />} />
          <Route path={PrivateRoutes.NEWPRODUCT} element={<NewProduct />} />
          <Route path={PrivateRoutes.PROFILE} element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/marketplace" />} />
        </Route>
      </Routes>
    ) : (
      <Routes>
        <Route element={<Root />}>
          <Route path={PublicRoutes.MARKETPLACE} element={<Marketplace />} />
          <Route path={PublicRoutes.PRODUCTDETAIL} element={<ProductItem />} />
          <Route path={PublicRoutes.GAMES} element={<Games />} />
          <Route
            path={`${PublicRoutes.GAMES}/SimonGame`}
            element={<SimonGame />}
          />
          <Route path={`${PrivateRoutes.GAMES}/SnakeGame`} element={<App />} />
          <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
          <Route path={PublicRoutes.SIGNIN} element={<SignIn />} />
          <Route path="*" element={<Navigate to="/marketplace" />} />
        </Route>
      </Routes>
    )}
  </BrowserRouter>
));
