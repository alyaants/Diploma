import Title from "../../title/title";
import styles from "../../cardLists/cardListMain/cardListMain.module.scss";
import CardListCommunal from "../../cardLists/cardListCommunal/cardListCommunal";
import CardListSeparate from "../../cardLists/cardListSeparate/cardListSeparate";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../router";
import Breadcrumbs from "../../breadcrumbs/breadcrumbs";
import { Technic } from "../../../@types";

const Separate = () => {
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
      <Title title={data.separate.title} className={styles.title} />
      <CardListSeparate />
    </div>
  );
};
export default Separate;
