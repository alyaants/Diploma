import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../header/header";
import Home from "./home/home";
import Cargo from "./cargo/cargo";
import Communal from "./communal/communal";
import Separate from "./separate/separate";
import SelectedCard from "./selectedCard/selectedCard";

export enum RoutesList {
  Home = "/",
  Cargo = "/technic/cargo",
  Communal = "/technic/communal",
  Separate = "/technic/separate",
  SelectedCard = "/technic/:category/:id",
  Default = "*",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<Header />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.Cargo} element={<Cargo />} />
          <Route path={RoutesList.Communal} element={<Communal />} />
          <Route path={RoutesList.Separate} element={<Separate />} />
          <Route path={RoutesList.SelectedCard} element={<SelectedCard />} />
          <Route
            path={RoutesList.Default}
            element={<Navigate to={RoutesList.Home} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
