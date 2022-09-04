import React from "react";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

const Search = ({ inputCondition, setInputCondition, searchAreaRef }) => {
  return (
    <form
      ref={searchAreaRef}
      className="serach_area"
      style={inputCondition ? { boxShadow: "0px 0px 2px 3px #ff9900" } : {}}
    >
      <div className="select">
        <span>All</span>
        <i style={{ transform: "translateY(3px)" }}>
          <IoMdArrowDropdown />
        </i>
      </div>
      <input
        onFocus={() => {
          setInputCondition(true);
        }}
        type="text"
        required
      />
      <button>
        <i>
          <GoSearch />
        </i>
      </button>
    </form>
  );
};

export default Search;
