import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (evento) => {
    evento.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;

    /*  setCategories([inputValue, ...categories]); */
    /*     setCategories((categories) => [inputValue, ...categories]); */

    onNewCategory(newInputValue);

    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar un gif"
        onChange={onInputValue}
        value={inputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
