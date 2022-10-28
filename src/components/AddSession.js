import React from "react";
import {Autocomplete, TextField} from '@mui/material';

const AddSessionPage = () => {

  const exercises = [
    { title: 'Bicep Curl', type: 'Arms' },
    { title: 'Hammer Curl', type: 'Arms' },
    { title: 'Cactus Arm', type: 'Arms' },
    { title: 'Skull Crusher', type: 'Arms' },
    { title: 'Upright Row', type: 'Arms' },
    { title: 'Romanian Deadlift', type: 'Legs' },
    { title: 'Squat', type: 'Legs' },
    { title: 'Lunge', type: 'Legs' },
    { title: 'Leg Press', type: 'Legs' },
    { title: 'Leg Curl', type: 'Legs' }
  ]

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

export default AddSessionPage;
