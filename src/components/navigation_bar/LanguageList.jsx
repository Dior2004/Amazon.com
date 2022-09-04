import React from "react";

const LanguageList = ({
  setLangFlagBtn,
  langFlagBtn,
  setLangViewBtn,
  langList,
  handleChecked,
}) => {
  return (
    <ul>
      {langList.map((e) => {
        return (
          <label
            key={e.id}
            onClick={() => {
              setLangFlagBtn((langFlagBtn = e.id));
              setLangViewBtn(false);
            }}
            onChange={() => {
              handleChecked(e.id);
            }}
            htmlFor={e.language}
          >
            <input
              type="checkbox"
              name="current_lang"
              id={e.language}
              checked={e.checked}
              onChange={() => {
                handleChecked(e.id);
              }}
            />
            <div className="circle"></div>
            <span>
              {e.language} - {e.abbr.toUpperCase()}
            </span>
          </label>
        );
      })}
    </ul>
  );
};

export default LanguageList;
