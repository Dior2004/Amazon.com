import React from "react";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchResults from "./SearchResults";

const Search = ({
  inputCondition,
  setInputCondition,
  searchAreaRef,
  setSearchInput,
  searchInput,
  productsData,
  setRelatedProducts,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(productsData.length ? productsData[0].title : "");
    setRelatedProducts(
      productsData.length ? productsData[0].title : "Nothing found"
    );
    setInputCondition(false);
  };

  return (
    <form
      ref={searchAreaRef}
      className="serach_area"
      onSubmit={(e) => handleSubmit(e)}
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
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setInputCondition(true);
          }}
          required
        />
        <SearchResults
          inputCondition={inputCondition}
          setInputCondition={setInputCondition}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          productsData={productsData}
          setRelatedProducts={setRelatedProducts}
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
