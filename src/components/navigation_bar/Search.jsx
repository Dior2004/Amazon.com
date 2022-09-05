import React from "react";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchResults from "./SearchResults";

const Search = ({
  inputCondition,
  setInputCondition,
  searchAreaRef,
  setSearchInput,
  SearchInput,
}) => {
  return (
    <form
      ref={searchAreaRef}
      className="serach_area"
      onSubmit={(e) => {
        e.preventDefault();
        // setInputCondition(false);
      }}
      style={inputCondition ? { boxShadow: "0px 0px 2px 3px #ff9900" } : {}}
    >
      <div className="select">
        <span>All</span>
        <i style={{ transform: "translateY(3px)" }}>
          <IoMdArrowDropdown />
        </i>
      </div>
      <div className="inp_search_wrap">
        <input
          onFocus={() => {
            setInputCondition(true);
          }}
          type="text"
          value={SearchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          required
        />
        <SearchResults
          inputCondition={inputCondition}
          setInputCondition={setInputCondition}
        />
      </div>

      <button>
        <i>
          <GoSearch />
        </i>
      </button>
    </form>
  );
};

export default Search;
