import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

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
      <Link to= '/'> Home </Link>
      <Link to= '/beerlist'> Beer List </Link>
      <Route exact path= '/'>
        <HomePage />
      </Route>
      <Route path = '/beerlist'>
        <BeerList />
      </Route>
    </div>
  );
}

export default App;
