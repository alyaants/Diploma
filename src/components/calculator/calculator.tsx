import React, { useState } from "react";
import { Technic } from "../../@types";
import styles from "./calculator.module.scss";
import Title from "../title/title";
import Button, { ButtonTypes } from "../button/button";
import Modal from "../modal/modal";

const RentalCalculator: React.FC = () => {
  const data = Technic;
  const [time, setTime] = useState<number>(0);
  const [driver, setDriver] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [selectedCarName, setSelectedCarName] = useState<string>("");
  const [totalCost, setTotalCost] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const carOptions = Object.keys(data);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setTime(value > 0 ? value : 1);
  };

  const handleDriverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setDriver(isChecked);
  };

  const handleCarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCarId = event.target.value;
    setSelectedCar(selectedCarId);

    // Находим название выбранной техники
    const carName = carOptions
      .map((carCategory) => data[carCategory])
      .flatMap((category) => category.items)
      .find((car) => car.id.toString() === selectedCarId)?.name || "";

    setSelectedCarName(carName);
  };

  const calculateTotalCost = () => {
    if (!selectedCar || time <= 0) {
      setTotalCost(0);
      return;
    }

    const carPrice = getCarPrice(selectedCar);
    let total = time * carPrice;

    if (driver) {
      total += 20;
    }

    setTotalCost(total);
  };

  const selectedCarData = carOptions
    .map((carCategory) => data[carCategory])
    .find((category) =>
      category.items.some((car) => car.id.toString() === selectedCar)
    );

  const getCarPrice = (selectedCarId: string): number => {
    for (const category in data) {
      if (data.hasOwnProperty(category)) {
        const car = data[category].items.find(
          (car) => car.id.toString() === selectedCarId
        );
        if (car) {
          return car.price;
        }
      }
    }
    return 0;
  };

  const handleCalculate = () => {
    calculateTotalCost();
  };

  return (
    <div className={styles.container}>
      <Title title={"Расчет стоимости аренды техники"} />
      <div className={styles.select}>
        <label htmlFor="car">Выберите транспорт:</label>
        <select id="car" value={selectedCar} onChange={handleCarChange}>
          <option value=""></option>
          {carOptions.map((carCategory, index) => (
            <optgroup key={index} label={data[carCategory].title}>
              {data[carCategory].items.map((car) => (
                <option key={`${carCategory}`} value={car.id}>
                  {car.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
      {selectedCar && (
        <div className={styles.info}>
          <p>
            Выбранный автомобиль: {selectedCarName}
          </p>
          <p>
            Цена за час аренды:{" "}
            {
              selectedCarData?.items.find(
                (car) => car.id.toString() === selectedCar
              )?.price
            }{" "}
            BYN
          </p>
        </div>
      )}
      <div className={styles.time}>
        <label htmlFor="time">Время аренды:</label>
        <div>
          <input
            type="number"
            id="time"
            value={time}
            onChange={handleTimeChange}
            placeholder="0"
          />
          <span> час(ов)</span>
        </div>
      </div>
      <div className={styles.driver}>
        <label htmlFor="driver">
          Нужен ли водитель: <br />
        </label>
        <div className={styles.driverWrap}>
          <input
            type="checkbox"
            id="driver"
            checked={driver}
            onChange={handleDriverChange}
          />
          <span> +20 BYN</span>
        </div>
      </div>
      <div className={styles.buttonsWrap}>
        <Button
          onClick={handleCalculate}
          className={styles.calculate}
          type={ButtonTypes.Primary}
          title={"Рассчитать"}
        />
        <Button
          onClick={openModal}
          className={styles.order}
          type={ButtonTypes.Primary}
          title={"Заказать"}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          priceCalculate={parseFloat(totalCost.toFixed(2))}
          selectedTechnic={selectedCarName}
        />
      </div>
      <div className={styles.total}>
        <h3>Итого: {totalCost.toFixed(2)} BYN</h3>
      </div>
    </div>
  );
};

export default RentalCalculator;
