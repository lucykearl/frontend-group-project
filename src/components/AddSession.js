import React, { useState } from "react";
import AddSessionCard from "./AddSessionCard";
import AutoComplete from "./AutoComplete";

const AddSessionPage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newSets, setNewSets] = useState([])
  const [setID, setSetID] = useState(1)

  const handleSelect = (selected) => {
    setSelectedOptions([...selectedOptions, selected]);
  };

  const handleSets = (sets) => {
    console.log(sets)
    setSetID(setID + 1)
    setNewSets([...newSets, sets])
    console.log(newSets)
  }

  const handleFinish = (session) => {
    
  }

  return (
    <div className="add-session-page">
      <AutoComplete onSelect={handleSelect} />
      {selectedOptions.map((exercise) => (
        <AddSessionCard key={exercise._id} {...exercise} setID={setID} onHandleSets={handleSets} />
      ))}
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
};

export default AddSessionPage;
