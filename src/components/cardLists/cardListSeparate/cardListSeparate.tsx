import React from "react";
import Card from "../../card/card";
import styles from "../../cardLists/cardListMain/cardListMain.module.scss";
import { Technic } from "../../../@types";
import { Link } from "react-router-dom";

const CardListSeparate = () => {

  const separatelData = Technic.separate.items; // Получаем массив данных для категории "communal"

  return (
    <div className={styles.container}>
      {separatelData.map((item) => (
        <Link to={`/technic/separate/${item.id}`} className={styles.link}>
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

export default CardListSeparate;
