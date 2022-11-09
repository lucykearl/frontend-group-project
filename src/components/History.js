import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/history.css"
import "../styles/app.css";

const History = () => {
    const [historyData, setHistoryData] = useState([])

    const getHistory = async () => {
        await axios.get('http://localhost:5000/session')
        .then((res) => setHistoryData(res.data))
    }

    useEffect(() => {
        getHistory()
    }, [])

  const DisplayData=historyData.map(
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
