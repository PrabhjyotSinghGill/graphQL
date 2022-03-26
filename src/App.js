import github from "./db.js";
import React, { useEffect } from 'react';


function App() {
  useEffect(() =>{
    const githubQuery = {
       query:`
       {
         viewer{
           name
         }
       }
       `
    }
  })
    
  return (
    <div className="app container mt-5">
      <h1 className="text-primary"><i className="bi bi-diagram-2-fill" ></i> Repos </h1>
    </div>
  );
}

export default App;

