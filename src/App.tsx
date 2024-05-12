import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input/input";
import Button, { ButtonTypes } from "./components/button/button";
import Title from "./components/title/title";
import FormContainer from "./components/formPageContainer/formPageContainer";
import CardList from "./components/cardLists/cardListMain/cardListMain";
import Header from "./components/header/header";
import Router from "./components/pages/router";
import SelectedCard from "./components/pages/selectedCard/selectedCard";

function App() {
  return (
    <div>
      {/* <SelectedCard /> */}
      <Router />
    </div>
  );
}

export default App;
