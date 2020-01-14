import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://swapi.co/api/people/1')
    .then(res => {
      setData(res.data.results);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <p>Loading...</p>
    </div>
  );
}

export default App;
