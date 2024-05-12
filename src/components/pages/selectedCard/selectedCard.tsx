import { Technic } from "../../../@types";
import Breadcrumbs from "../../breadcrumbs/breadcrumbs";
import Title from "../../title/title";
import Button, { ButtonTypes } from "../../button/button";
import Tabs, { Tab } from "../../tabs/tabs";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesList } from "../router";
import Modal from "../../modal/modal";
import styles from "./selectedCard.module.scss";

const SelectedCard = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const onBack = () => {
    navigate(RoutesList.Home);
  };
  if (!category || !id) {
    return <div>Данные не найдены</div>;
  }
  const selectedData = Technic[category]?.items.find(
    (item) => item.id === parseInt(id, 10)
  );

  if (!selectedData) {
    return <div>Данные не найдены</div>;
  }

  const paths = [
    "Главная",
    "Услуги",
    "Аренда техники",
    `${Technic[category].title}`,
    `${selectedData.name}`,
  ];

  const tabs: Tab[] = [
    { title: "Описание", content: <div>{selectedData.description}</div> },
    {
      title: "Условия аренды",
      content: (
        <div>
          <p>
            Взять спецтехнику в аренду всегда выгоднее, чем ее купить. Новое и
            даже бывшее в употреблении оборудование порой стоит очень дорого.
            Тем более нет смысла ее приобретать, если техника нужна для
            проведения разовых работ.
          </p>
          <br />
          <ul className={styles.tabsul}>
            Условия аренды спецтехники в компании "Горавтомост":
            <li>Наша компания работает без выходных.</li>
            <li>Нужная техника будет доставлена на ваш объект в любой день.</li>
            <li>
              Сервисное обслуживание также осуществляется 7 дней в неделю.
            </li>
            <li>
              Наши специалисты проконсультируют вас и помогут выбрать нужную
              модель.
            </li>
            <li>
              В нашей компании работают машинисты, операторы, водители
              погрузчиков со стажем более 10 лет.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs paths={paths} onBack={onBack} />
      <Title title={selectedData.name} />
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={selectedData.image} alt="#" />
        </div>
        <div className={styles.characteristic}>
          <p className={styles.title}>Технические характеристики</p>
          <p>
            Длина, м <span>{selectedData.length}</span>
          </p>
          <p>
            Высота, м <span>{selectedData.height}</span>
          </p>
          <p>
            Ширина, м <span>{selectedData.width}</span>
          </p>
          <p>
            Колесная база, м <span>{selectedData.wheelbase}</span>
          </p>
          <p>
            Снаряжённая масса, т <span>{selectedData.curbweight}</span>
          </p>
          <p>
            Грузоподъёмность, т <span>{selectedData.payload}</span>
          </p>
          <p>
            Максимальная скорость, км/ч <span>{selectedData.maximumspeed}</span>
          </p>
          <div>
            <p className={styles.price}>
              Стоимость аренды от: <span>{selectedData.price} </span> BYN
            </p>

            <Button
              type={ButtonTypes.Primary}
              title={"Взять в аренду"}
              className={styles.btn}
              onClick={openModal}
            />
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              selectedTechnic={selectedData.name}
              priceSelectedTechnic={selectedData.price}
            />
          </div>
        </div>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default SelectedCard;
