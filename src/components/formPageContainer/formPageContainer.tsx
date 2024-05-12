import { ReactElement, useState } from "react";
import Button, { ButtonTypes } from "../button/button";
import { Children } from "../../@types";
import Title from "../title/title";
import Input from "../input/input";
import style from "./formPageContainer.module.scss";

type FormContainerProps = {
  title: string;
  children?: Children;
  btnTitle: string;
  onSubmit: () => void;
  additionalText?: ReactElement;
  className?: string;
  onClose: () => void;
  selectedTechnic?: string;
  price: number;
};

const FormContainer = (props: FormContainerProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    // Удаление всех пробелов из номера
    const phoneWithoutSpaces = phone.replace(/\s/g, "");

    const re = /^\+\d{12}$/; // Проверяем номер на соответствие формату: +375291111111
    return re.test(phoneWithoutSpaces);
  };

  const onSubmit = () => {
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      // Если какое-то поле не заполнено, не вызываем onSubmit
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Проверьте введенный email");
      return;
    } else {
      setEmailError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError("Проверьте номер телефона");
      return;
    } else {
      setPhoneError("");
    }
    // Отправка данных
    sendData();

    // Закрытие основного модального окна
    props.onClose();
  };

  const sendData = () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      selectedTechnic: props.selectedTechnic,
      price: props.price,
    };

    fetch("/api/saveData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Обработка успешного ответа от сервера
        console.log("Data saved successfully:", data);
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("There was a problem saving the data:", error);
      });
  };

  return (
    <div className={style.back}>
      <div className={style.container}>
        <div className={style.head}>
          <Title title={props.title} />
          <div className={style.close} onClick={props.onClose}>
            ✖
          </div>
        </div>
        <div className={style.order}>
          <div className={style.fieldsContainer}>
            <p className={style.technic}>
              Выбранная техника: {props.selectedTechnic}
            </p>
            <p className={style.price}>Стоимость: {props.price} BYN</p>
          </div>
          <Input
            title={"Имя"}
            placeholder={"Ваш имя"}
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title={"Email"}
            placeholder={"Ваш email"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className={style.errorValue}>{emailError}</p>}
          <Input
            title={"Телефон"}
            placeholder={"+375 (29) 111 11 11"}
            value={phone}
            type={"tel"}
            onChange={(e) => setPhone(e.target.value)}
          />
          {phoneError && <p className={style.errorValue}>{phoneError}</p>}

          <Button
            type={ButtonTypes.Primary}
            title={props.btnTitle}
            onClick={onSubmit}
            className={style.button}
            disabled={
              name.trim() === "" || email.trim() === "" || phone.trim() === ""
            }
          />
        </div>
      </div>
    </div>
  );
};
export default FormContainer;
