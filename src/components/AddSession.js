import React, {useState} from "react";
import AddSessionCard from "./AddSessionCard";
import AutoComplete from "./AutoComplete";

const AddSessionPage = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (selected) => {
    setSelectedOptions([...selectedOptions, selected])
  }

  return (
    <div className="add-session-page">
      <AutoComplete onSelect={handleSelect} />
      {selectedOptions.map((exercise) => (
        <AddSessionCard key={exercise._id} {...exercise} />
      ))}
    </div>
    
  )
};

export default AddSessionPage;
