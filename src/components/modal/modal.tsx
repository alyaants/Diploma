import React, { useState } from "react";
import FormContainer from "../formPageContainer/formPageContainer";
import styles from "./modal.module.scss";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTechnic: string;
  priceSelectedTechnic?: number;
  priceCalculate?: number;
}

const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.containerModal}>
        <FormContainer
          title={"Оставить заявку"}
          btnTitle={"Отправить"}
          onSubmit={() => {}}
          onClose={props.onClose}
          selectedTechnic={props.selectedTechnic}
          price={props.priceSelectedTechnic || props.priceCalculate || 0}
        />
      </div>
    </div>
  );
};

export default Modal;
