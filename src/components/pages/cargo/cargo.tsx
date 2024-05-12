import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs/breadcrumbs";
import CardListCargo from "../../cardLists/cardListCargo/cardListCargo";
import Title from "../../title/title";
import styles from "./cargo.module.scss";
import { RoutesList } from "../router";
import { Technic } from "../../../@types";

const Cargo = () => {
  const data = Technic;

  const navigate = useNavigate();

  const onRent = () => {
    navigate(RoutesList.Home);
  };
  const paths = [
    "Главная",
    "Услуги",
    "Аренда техники",
    "Грузопассажирская техника",
  ];
  return (
    <div>
      <Breadcrumbs paths={paths} onBack={onRent} />
      <Title title={data.cargo.title} className={styles.title} />
      <CardListCargo />
    </div>
  );
};
export default Cargo;
