import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={s.contacsList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        <span className={s.name}>{name}</span>: {number}
        <button type="button" className={s.close} onClick={() => onDelete(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
