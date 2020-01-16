import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Card from './card';


function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://swapi.co/api/people')
    .then(res => {
      setData(res.data.results);
    })
    .catch(err => console.log(err));
  }, []);

  console.log(data)

  return (
    <div className="App">
      <Card data={data} />
    </div>
  );
}

export default App;
