import github from "./db.js";
import React, { useEffect, useState, useCallback} from 'react';
import query from "./Query";
import RepoInfo from "./RepoInfo";


function App() {
  let [userName, setUserName] = useState("");
  let [repoList, setRepoList] = useState(null);
  const fetchData = useCallback(()=>{
    fetch(github.baseURL,{
      method:"POST",
      headers:github.headers,
      body:JSON.stringify(query),
    }).then(response => response.json())
    .then(data =>{
      const viewer = data.data.viewer;
      const repos = data.data.search.nodes; 
      setUserName(viewer.name);
      setRepoList(repos);
      console.log(data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[]);

  

  useEffect(() =>{
    fetchData();
  },[fetchData]);
    
  return (
    <div className="app container mt-5">
      <h1 className="text-primary"><i className="bi bi-diagram-2-fill" ></i> Repos </h1>
      <p>Hey there {userName}</p>
      {
        repoList && (
          <ul className="list-group list-group-flush">
            {
              repoList.map((repo) =>(
                <RepoInfo key={repo.id} repo={repo}></RepoInfo>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default App;

