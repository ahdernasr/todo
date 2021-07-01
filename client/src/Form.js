import React, { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");

  const submitHandler = () => {
    
    props.submit({
      text: input,
      done: false,
    });

    setInput("");
  };

  return (
    <>
      <input
        className="input-box"
        placeholder="Add a new task..."
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button>
        <i className="fas fa-plus" onClick={submitHandler}></i>
      </button>
    </>
  );
};

export default Form;
