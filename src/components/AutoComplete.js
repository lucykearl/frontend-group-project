import React, { useEffect, useState } from "react";
import {Autocomplete, TextField} from '@mui/material';
import axios from "axios";

const AutoComplete = (onSelect) => {

  const [exercises, setExercises] = useState([])
  const [selected, setSelected] = useState('')
  
  console.log(selected)
  onSelect=(selected)

  useEffect(() => {
    axios.get('http://localhost:5000/exercises').then(({ data }) => setExercises(data))
  }, [])

  return (
    <Autocomplete
      id="grouped-exercises"
      options={exercises}
      groupBy={(option) => option.type}
      getOptionLabel={(option) => option.title}
      onChange={(event, value) => setSelected(value.title)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select Exercise" />}
    />
  )
};

export default AutoComplete;