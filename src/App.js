import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from axios;


function App() {
  const [data, data] = useState([])
  
  return (
    <div className="App">
      
      {useEffect(() => {
          axios.get('https://swapi.co/api/people/1')
          .then(
            console.log(res.data.results)
          )
      })}
    </div>
  );
}

export default App;
