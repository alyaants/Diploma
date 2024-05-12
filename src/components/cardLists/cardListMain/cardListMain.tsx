import React from "react";
import Card from "../../card/card";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../pages/router";
import { Technic } from "../../../@types";
import styles from "./cardListMain.module.scss";

const CardList = () => {
  const data = Technic;

  const navigate = useNavigate();

  const onClickCommunal = () => {
    navigate(RoutesList.Communal);
  };
  const onClickSeparate = () => {
    navigate(RoutesList.Separate);
  };
  const onClickCargo = () => {
    navigate(RoutesList.Cargo);
  };

  return (
    <div className={styles.container}>
      <Card
        image={data.cargo.items[0].image}
        title={data.cargo.title}
        onClick={onClickCargo}
      />
      <Card
        image={data.communal.items[8].image}
        title={data.communal.title}
        onClick={onClickCommunal}
      />
      <Card
        image={data.separate.items[0].image}
        title={data.separate.title}
        onClick={onClickSeparate}
      />
    </div>
  );
};

export default CardList;
