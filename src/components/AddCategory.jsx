import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputvalue, setInputvalue] = useState("");

  const onInputChange = ({ target }) => {
    setInputvalue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newinputvalue = inputvalue.trim();
    onNewCategory(newinputvalue);
    setInputvalue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 mt-4" style={{ width: "50%" }}>
          <input
            type="text"
            value={inputvalue}
            className="form-control"
            onChange={onInputChange}
            placeholder="Buscar Gifs"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Refresh
          </button>
        </div>
      </form>
    </div>
  );
};
