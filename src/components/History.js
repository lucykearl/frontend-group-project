import React from "react";
import JsonData from "../data/history.json";
import "../styles/history.css"
import "../styles/app.css";


function History(){
  const DisplayData=JsonData.map(
      (info)=>{
          return(
              <tr>
                  <td className="history--date">{info.date}</td>
                  <td>{info.time}</td>
                  <td className="history--exercise--title">{info.exercises.map((exercise) => exercise.title + ", ")}</td>
                  <td>{info.exercises.map((exercise) => exercise.weight + ", ")}</td>
                  <td>{info.exercises.map((exercise) => exercise.reps + ", ")}</td>
              </tr>
          )
      }
  )

  return(
      <div className="history-table">
          <table className="table table-striped" id="historytable">
              <thead>
                  <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Title</th>
                  <th>Weight</th>
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
