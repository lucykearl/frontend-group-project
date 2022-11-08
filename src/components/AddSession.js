import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import AddSessionCard from "./AddSessionCard";
import AutoComplete from "./AutoComplete";
import Alert from "./Alert";
import "../styles/app.css";
import "../styles/add-session.css"

const AddSessionPage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newSets, setNewSets] = useState([]);
  const [setID, setSetID] = useState(1);
  const [alert, setAlert] = useState({alert: {message: "", isSuccess: false}})

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

    let filterArray = []
    
    if (selected) {
      filterArray = selectedOptions.filter((exercise) => exercise.title === selected.title)
    }
    
    if (selected === '' || selected === null) {
      setAlert({message: "Please select an exercise", isSuccess: false})
    } else if (filterArray.length >= 1) {
      setAlert({message: "Exercise already set", isSuccess: false})
      filterArray = []
    } else {
      setAlert({message: "", isSuccess: true})
      setSelectedOptions([...selectedOptions, selected]);
    }
  };

  const handleSets = (sets) => {
    setSetID(setID + 1);
    setNewSets([...newSets, sets]);
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
    setAlert({message: "Session Finished", isSuccess: true})  };

  return (
    
    <div className="add-session-page">
      <Alert message={alert.message} success={alert.isSuccess} />
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
