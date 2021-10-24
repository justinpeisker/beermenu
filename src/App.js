import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

//custom components
import HomePage from './Components/Home Page';
import BeerList from './Components/BeerList';


function App() {
  
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
      console.log(res);
      setBeers(res.data)
    }).catch(err => {
      console.error(err);
    })
  }, [])
  return (
    <div className="App">
      <HomePage />
      <BeerList />
      
    </div>
  );
}

export default App;
