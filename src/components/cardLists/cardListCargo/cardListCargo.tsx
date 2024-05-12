import React from "react";
import Card from "../../card/card";
import styles from "../../cardLists/cardListMain/cardListMain.module.scss";
import { Technic } from "../../../@types";
import { Link } from "react-router-dom";

const CardListCargo = () => {
  const cargoData = Technic.cargo.items;

  return (
    <div className={styles.container}>
      {cargoData.map((item) => (
        <Link to={`/technic/cargo/${item.id}`} className={styles.link}>
          <Card
            key={item.id}
            image={item.image}
            title={item.name}
            id={item.id}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardListCargo;
