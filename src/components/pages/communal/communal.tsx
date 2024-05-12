import Title from "../../title/title";
import styles from "../../cardLists/cardListMain/cardListMain.module.scss";
import CardListCommunal from "../../cardLists/cardListCommunal/cardListCommunal";
import Breadcrumbs from "../../breadcrumbs/breadcrumbs";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../router";

const Communal = () => {
  const navigate = useNavigate();
  const onRent = () => {
    navigate(RoutesList.Home);
  };
  const paths = ["Главная", "Услуги", "Аренда техники", "Коммунальная техника"];
  return (
    <div>
      <Breadcrumbs paths={paths} onBack={onRent} />
      <Title title={"Коммунальная техника"} className={styles.title} />
      <CardListCommunal />
    </div>
  );
};
export default Communal;
