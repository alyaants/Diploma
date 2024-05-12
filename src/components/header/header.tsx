import React from "react";
import styles from "./header.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Menu from "../menu/menu";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={require("../../images/image13.png")} alt="" />
        </div>
        <div className={styles.menu}>
          <div className={styles.phones}>
            <p>
              Приемная: <br /> 8 (029) 165-11-81
            </p>
            <p>
              Диспетчерская: <br />8 (017) 291-55-67
            </p>
          </div>
          <nav>
            <ul className={styles.items}>
              <li>Главная{/* <Link to="/">Главная</Link> */}</li>
              <li>О предприятии{/* <Link to="/about">О нас</Link> */}</li>
              <li className={styles.services}>
                Услуги{/* <Link to="/contact">Контакты</Link> */}
              </li>
              {/* Другие ссылки на ваши страницы */}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.main}>
        <Menu />
        <Outlet />
      </div>
      <div className={styles.footer}>
        <div className={styles.left}>
          <h2>© «Горавтомост» 2001-2024</h2>
          <p>
            Коммунальное ремонтно-эксплуатационное унитарное предприятие
            «Горавтомост»
          </p>
          <p>
            Содержание и текущий ремонт мостов, путепроводов, подземных
            пешеходных переходов.
          </p>
          <p>Контакты</p>
        </div>
        <div className={styles.right}>
          <p>
            Приемная:
            <br />8 (029) 279-52-30 <br />8 (017) 272-49-46
          </p>
          <p>
            Диспетчерская: <br /> 8 (017) 291-55-67, <br />8 (017) 395-06-80
          </p>
          <p>
            Персональные данные: <br />
            Политика оператора в отношении обработки персональных данных
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
