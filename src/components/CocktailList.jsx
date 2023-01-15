import React from "react";

import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="text-center text-3xl mt-36">
        No cocktails matched your search criteria!
      </h2>
    );
  }
  return (
    <div className="flex flex-wrap justify-center items-center">
      {cocktails.map((item) => {
        return <Cocktail key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CocktailList;
