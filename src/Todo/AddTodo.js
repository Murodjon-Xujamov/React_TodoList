import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
    let [value, setValue] = useState("");
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    };
}

function AddTodo({ onCreate }) {
    const input = useInputValue('');
  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
        onCreate(input.value());
        input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "10px" }} onSubmit={submitHandler}>
      <input {...input.bind} style={{ width: "30%", height: "30px", marginRight: "30px" }}
      />
      <button type="submit" style={{ width: "10%", height: "35px" }}>
        Add Todo
      </button>
    </form>
  );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo;