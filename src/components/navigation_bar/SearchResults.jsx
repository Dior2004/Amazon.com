import React from "react";
import "./navbar_css/SearchResults.css";

const SearchResults = ({ inputCondition, setInputCondition }) => {
  return (
    <ul
      className="search_result_list"
      style={inputCondition ? { display: "block" } : { display: "none" }}
    >
      <li
        onClick={() => {
          setInputCondition(false);
        }}
      >
        categories
      </li>
    </ul>
  );
};

export default SearchResults;
