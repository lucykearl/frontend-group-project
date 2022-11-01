import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from '@mui/material';
import axios from "axios";

const AutoComplete = ({onSelect}) => {

  const [exercises, setExercises] = useState([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/exercises').then(({ data }) => setExercises(data))
  }, [])

  return (
    <div className="auto-complete">
      <Autocomplete
        id="grouped-exercises"
        options={exercises}
        groupBy={(option) => option.type}
        getOptionLabel={(option) => option.title}
        onChange={(event, value) => setSelected(value)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select Exercise" />}
      />
      <button type="button" onClick={() => onSelect(selected)}>Add</button>
    </div>
  )
};

export default AutoComplete;