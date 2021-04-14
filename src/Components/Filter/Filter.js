import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.findForm}>
      <h2 className={s.title}>Поиск контактов:</h2>
      <label className={s.label}>
        <span className={s.labelTitle}>Имя:</span>
        <input
          type="text"
          onChange={onChange}
          value={value}
          name="filter"
          placeholder="введите имя"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
