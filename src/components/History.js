import React from "react";
import JsonData from "../data/history.json";


function History(){
  const DisplayData=JsonData.map(
      (info)=>{
          return(
              <tr>
                  <td>{info.date}</td>
                  <td>{info.time}</td>
                  <td>{info.exercises.map((exercise) => exercise.title + ", ")}</td>
                  <td>{info.exercises.map((exercise) => exercise.weight + ", ")}</td>
                  <td>{info.exercises.map((exercise) => exercise.sets + ", ")}</td>
                  <td>{info.exercises.map((exercise) => exercise.reps + ", ")}</td>
              </tr>
          )
      }
  )

  return(
      <div>
          <table class="table table-striped">
              <thead>
                  <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Title</th>
                  <th>Weight</th>
                  <th>Sets</th>
                  <th>Reps</th>
                  </tr>
              </thead>
              <tbody>
               
                  
                  {DisplayData}
                  
              </tbody>
          </table>
           
      </div>
  )
}

export default History;
