import React, { useState } from "react";
import "../styles/app.css";

<<<<<<< HEAD
const AddSessionCard = ({ title, setID, weight, reps, onHandleSets }) => {
  const [inputs, setInputs] = useState([
    { setID: setID, title: title, weight: "", reps: "" },
  ]);
=======
const AddSessionCard = ({ title, setID, onHandleRemoveSet, onHandleSets }) => {

  const [inputs, setInputs] = useState([{ setID: setID, title: title, weight: "", reps: "" }]);
>>>>>>> bb27dc0412ada6789c464451e7122b414113632b

  const handleFormChange = (index, event) => {
    let data = [...inputs];
    data[index][event.target.name] = event.target.value;
    setInputs(data);
  };

  const handleAddSet = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log(inputs);
    let newInputs = {
      setID: setID,
      title: title,
      weight: inputs[inputs.length - 1].weight,
      reps: inputs[inputs.length - 1].reps,
    };
=======
    let newInputs = { setID: setID, title: title, weight: inputs[inputs.length - 1].weight, reps: inputs[inputs.length - 1].reps };
>>>>>>> bb27dc0412ada6789c464451e7122b414113632b
    setInputs([...inputs, newInputs]);
    onHandleSets(newInputs);
  };

  const handleRemoveSet = (index, e) => {
    e.preventDefault();
    let data = [...inputs];
    let removedSet = data.splice(index, 1);
    console.log(removedSet)
    onHandleRemoveSet(removedSet)
    setInputs(data);
  };

  return (
    <div className="add-session-card">
      <form>
        <div className="add-session-card--title">
          <label>{title}</label>
        </div>
        <div className="add-session-card--sets">
          {inputs.map((input, index) => {
            return (
              <div key={index}>
                <label>{index + 1}</label>
                <input
                  name="weight"
                  placeholder={0}
                  value={input.weight}
                  onChange={(event) => handleFormChange(index, event)}
                ></input>
                <input
                  name="reps"
                  placeholder={0}
                  value={input.reps}
                  onChange={(event) => handleFormChange(index, event)}
                ></input>
                <button
                  className="button--remove"
                  onClick={(event) => handleRemoveSet(index, event)}
                >
                  Remove
                </button>
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
