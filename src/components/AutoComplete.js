import React, { useEffect, useState } from "react";
import {Autocomplete, TextField} from '@mui/material';
import axios from "axios";

const AutoComplete = () => {

  const [exercises, setExercises] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/exercises').then(({ data }) => setExercises(data[0].exercises))
  }, [])

  return (
    <Autocomplete
      id="grouped-exercises"
      options={exercises}
      groupBy={(option) => option.type}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select Exercise" />}
    />
  )
};

export default AutoComplete;