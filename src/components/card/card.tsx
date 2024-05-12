import React from "react";
import styles from "./card.module.scss";
import { Technic } from "../../@types";
// import { MovieCard, MovieCardById, Theme } from "../../@types";
// import { useNavigate } from "react-router-dom";
interface CardProps {
  image: string;
  title?: string;
  onClick?: () => void;
  id?: number;
}
const Card = (props: CardProps) => {

  // const onClick = () => {
  //   console.log("ddddd");
  //   //   navigate(`/movie/${props.id}`);
  // };

  return (
    <div className={styles.container} onClick={props.onClick}>
      <div className={styles.image}>
        <img src={props.image} alt={props.title} className={styles.img} />
      </div>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  );
};

export default Card;
