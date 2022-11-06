import React, { useState } from "react";
import "../styles/app.css";
import "../styles/add-session-card.css"

const AddSessionCard = ({ title, setID, onHandleRemoveSet, onHandleSets }) => {
  const [inputs, setInputs] = useState([
    { setID: setID, title: title, weight: "", reps: "" },
  ]);

  const handleFormChange = (index, event) => {
    let data = [...inputs];
    data[index][event.target.name] = event.target.value;
    setInputs(data);
  };

  const handleAddSet = (e) => {
    e.preventDefault();
    let newInputs = {
      setID: setID,
      title: title,
      weight: inputs[inputs.length - 1].weight,
      reps: inputs[inputs.length - 1].reps,
    };
    setInputs([...inputs, newInputs]);
    onHandleSets(newInputs);
  };

  const handleRemoveSet = (index, e) => {
    e.preventDefault();
    let data = [...inputs];
    let removedSet = data.splice(index, 1);
    onHandleRemoveSet(removedSet);
    setInputs(data);
  };

  return (
    <div className="add-session-card">
      <form className="add-session-card--form">
        <div className="add-session-card--title">
          <label>{title}</label>
        </div>
        <div className="add-session-card--sets">
          {inputs.map((input, index) => {
            return (
              <div className="add-session-card--sets--item" key={index}>
                <label>SET {index + 1}</label>
                <input
                  name="weight"
                  placeholder="WEIGHT"
                  value={input.weight}
                  onChange={(event) => handleFormChange(index, event)}
                ></input>
                <input
                  name="reps"
                  placeholder="REPS"
                  value={input.reps}
                  onChange={(event) => handleFormChange(index, event)}
                ></input>
                <div className="button-container">
                  <button
                    className="button--remove"
                    onClick={(event) => handleRemoveSet(index, event)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="button--addset" type="button" onClick={handleAddSet}>
          Add Set
        </button>
      </form>
    </div>
  );
};

export default AddSessionCard;
