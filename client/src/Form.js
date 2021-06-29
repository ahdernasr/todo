import React, { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        className="input-box"
        placeholder="Add a new task..."
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button>
        <i
          className="fas fa-plus"
          onClick={() => {
            props.submit({
              text: input,
              done: false,
            });
          }}
        ></i>
      </button>
    </>
  );
};

export default Form;
