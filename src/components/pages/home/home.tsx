import React from "react";
import Breadcrumbs from "../../breadcrumbs/breadcrumbs";
import RentalCalculator from "../../calculator/calculator";
import CardList from "../../cardLists/cardListMain/cardListMain";
import Title from "../../title/title";

const Home = () => {

  const paths = ['Главная', 'Услуги', 'Аренда техники'];
  return (
    <div>
      <Breadcrumbs paths={paths} />
      <Title title={"Аренда техники"} />
      <CardList /> 
      <RentalCalculator />
    </div>
  );
};

export default Home;
