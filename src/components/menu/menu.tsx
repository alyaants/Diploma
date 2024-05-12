import Title from "../title/title";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.container}>
      <Title title={"Наши услуги"} className={styles.menuTitle} />
      <ul className={styles.leftMenu}>
        <li className={styles.active}>Аренда техники</li>
        <li>Штукатурные и малярные работы</li>
        <li>Облицовочные работы</li>
        <li>Электромонтажные работы</li>
        <li>Работы по ремонту и устройству дорожного покрытия</li>
        <li>Благоустройство территории</li>
        <li>Помывка поверхностей</li>
      </ul>
    </div>
  );
};
export default Menu;
