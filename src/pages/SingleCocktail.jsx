import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getCocktails() {
      setLoading(true);
      try {
        const response = await fetch(`${url}${id}`);
        const { drinks } = await response.json();
        if (drinks) {
          const {
            strDrink: name,
            strCategory: category,
            strAlcoholic: alcohol,
            strGlass: glass,
            strDrinkThumb: image,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          } = drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          ];
          const newCocktail = {
            name,
            category,
            alcohol,
            glass,
            image,
            instruction,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktails();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No cocktail has been found</h2>;
  }

  const { name, image, glass, category, instruction, ingredients, alcohol } =
    cocktail;

  return (
    <>
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto justify-between  mt-9 bg-slate-300 p-5 shadow-lg">
        <h2 className="text-center text-xl font-bold tracking-widest">
          {name}
        </h2>

        <div className="flex justify-center items-center space-x-9">
          <img src={image} alt={name} className="h-52 w-52 rounded-md" />
          <div className="flex flex-col space-y-4 mt-4">
            <div className="flex flex-row space-x-2">
              <h1 className="bg-green-500 rounded-md px-2 pb-1 font-semibold">
                Name
              </h1>
              <h2 className="font-semibold">{name}</h2>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="bg-green-500 rounded-md px-2 pb-1 font-semibold">
                Category
              </h1>
              <h2 className="font-semibold">{category}</h2>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="bg-green-500 rounded-md px-2 pb-1 font-semibold">
                Info
              </h1>
              <h2 className="font-semibold">{alcohol}</h2>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="bg-green-500 rounded-md px-2 pb-1 font-semibold">
                Glass
              </h1>
              <h2 className="font-semibold">{glass}</h2>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="bg-green-500 rounded-md px-2 pb-1 h-max font-semibold">
                Instructions
              </h1>
              <h2 className="font-semibold">{instruction}</h2>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="bg-green-500 rounded-md px-2 pb-1 h-max font-semibold">
                Ingredients
              </h1>
              <h2 className="font-semibold">
                {ingredients.join(", ")}
                {/* {ingredients.map((item) => {
                  return <h1>{item.join(", ")}</h1>;
                })} */}
              </h2>
            </div>
          </div>
        </div>
        <Link
          to="/"
          className="bg-green-900 w-4/12 rounded-md px-2 py-2 pb-2 text-white tracking-widest text-center self-center "
        >
          Back Home
        </Link>
      </div>
    </>
  );
};

export default SingleCocktail;
