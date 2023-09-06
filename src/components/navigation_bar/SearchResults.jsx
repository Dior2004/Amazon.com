import React from "react";
import "./navbar_css/SearchResults.css";

const SearchResults = ({
  inputCondition,
  setInputCondition,
  searchInput,
  setSearchInput,
  productsData,
  setRelatedProducts,
}) => {
  return (
    <ul
      className="search_result_list"
      style={
        inputCondition && searchInput
          ? { display: "block" }
          : { display: "none" }
      }
    >
      {productsData.length ? (
        productsData.map((e) => {
          return (
            <li
              key={e.id}
              onClick={() => {
                setInputCondition(false);
                setSearchInput(e.title);
                setRelatedProducts(e.title);
              }}
            >
              {e.title}
            </li>
          );
        })
      ) : (
        <li
          onClick={() => {
            setInputCondition(false);
            setSearchInput("");
          }}
        >
          No mathching found
        </li>
      )}
    </ul>
  );
};

export default SearchResults;
