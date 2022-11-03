import React, { useState } from "react";
import AddSessionCard from "./AddSessionCard";
import AutoComplete from "./AutoComplete";

const AddSessionPage = () => {
<<<<<<< HEAD
  return <AutoComplete />;
=======
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (selected) => {
    setSelectedOptions([...selectedOptions, selected]);
  };

  const handleFinish = (session) => {
    
  }

  return (
    <div className="add-session-page">
      <AutoComplete onSelect={handleSelect} />
      {selectedOptions.map((exercise) => (
        <AddSessionCard key={exercise._id} {...exercise} />
      ))}
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
>>>>>>> 255388dd8c7bbc3c964d9ff54458fc77a6ee9976
};

export default AddSessionPage;
