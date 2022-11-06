import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import AddSessionCard from "./AddSessionCard";
import AutoComplete from "./AutoComplete";
import "../styles/app.css";
import "../styles/add-session.css"

const AddSessionPage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newSets, setNewSets] = useState([]);
  const [setID, setSetID] = useState(1);

  const startTime = moment();
  let finishTime = "";

  const getTime = () => {
    const duration = moment.duration(moment().diff(startTime));
    const difference = moment
      .utc(duration.as("milliseconds"))
      .format("HH:mm:ss");
    finishTime = difference;
  };

  const handleSelect = (selected) => {
    setSelectedOptions([...selectedOptions, selected]);
  };

  const handleSets = (sets) => {
    setSetID(setID + 1);
    setNewSets([...newSets, sets]);
    console.log(newSets)
  };

  const handleRemoveSet = (set) => {
    const removedSetID = set[0].setID;
    const removeSet = newSets.findIndex((set) => set.setID === removedSetID);
    newSets.splice(removeSet, 1);
    console.log(newSets);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    const date = moment().format("DD/MM/YYYY");
    getTime();
    axios.post("http://localhost:5000/session", {
      date: date,
      time: finishTime,
      exercise: newSets,
    });
  };

  return (
    <div className="add-session-page">
      <AutoComplete onSelect={handleSelect} />
      {selectedOptions.map((exercise) => (
        <AddSessionCard
          key={exercise._id}
          {...exercise}
          setID={setID}
          onHandleRemoveSet={handleRemoveSet}
          onHandleSets={handleSets}
        />
      ))}
      <button className="button--finish" onClick={handleFinish}>
        Finish
      </button>
    </div>
  );
};

export default AddSessionPage;
