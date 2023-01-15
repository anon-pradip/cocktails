import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <div className="m-6 max-w-lg mx-auto rounded-md shadow-lg bg-white p-2 ">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col space-y-2 items-center justify-center mb-2"
      >
        <label htmlFor="name" className="text-xl font-semibold">
          Search your favorite cocktail:
        </label>
        <input
          type="text"
          id="name"
          className="bg-slate-200 rounded-sm"
          ref={searchValue}
          onChange={() => setSearchTerm(searchValue.current.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
