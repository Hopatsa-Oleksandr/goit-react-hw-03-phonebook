import React, { Component } from "react";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;

    if (this.checkContacts(this.props.contacts, name)) {
      alert(`${name} is already in contacts.`);
    } else {
      this.props.onSubmit({
        id: uuidv4(),
        name,
        number,
      });

      this.reset();
    }
  };

  checkContacts = (arr, target) => {
    return arr.find(({ name }) => name.toLowerCase() === target.toLowerCase());
  };

  changeInput = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={s.section}>
        <form className={s.newContacsForm} onSubmit={this.handleSubmit}>
          <h2 className={s.title}>Добавить новый контакт:</h2>
          <label className={s.label}>
            <span className={s.labelTitle}>Имя:</span>
            <input
              type="text"
              onChange={this.changeInput}
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder="введите имя"
              required
            />
          </label>
          <label className={s.label}>
            <span className={s.labelTitle}>Номер:</span>
            <input
              type="text"
              onChange={this.changeInput}
              value={number}
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              placeholder="введите номер телефона"
              required
            />
          </label>

          <button type="submit" className={s.button}>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
