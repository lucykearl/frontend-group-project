import React, {useState} from "react";
import AddSessionCard from "./AddSessionCard";
import AutoComplete from "./AutoComplete";

const AddSessionPage = () => {

  const [selectedOption, setSelectedOption] = useState([]);

  const handleSelect = (selected) => {
    setSelectedOption(selected)
  }

  return (
    <div className="add-session-page">
      <AutoComplete onSelect={handleSelect}/>
      <AddSessionCard selected={selectedOption}/>
    </div>
    
  )
};

export default AddSessionPage;
