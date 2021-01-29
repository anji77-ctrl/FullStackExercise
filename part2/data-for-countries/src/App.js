import axios from 'axios'
import { useState, useEffect } from 'react'
import InfoCountry from './components/InfoCountry'
import SearchInput from './components/SearchInput'
import Weather from './components/Weather'

function App() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [city, setCity] = useState(null)


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleShow = (id) => {
    const fi = filterCountry.find(val => val.alpha2Code===id)
    setSearch(fi.name);
    setCity(fi.capital)
  }
  
  const filterCountry = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
  let display

  if (!search.length) {
    display = []
  }
  else {
    if (filterCountry.length < 9) {
      display = filterCountry.map(val => <p key={val.alpha2Code}>{val.name} <button onClick={()=>{handleShow(val.alpha2Code)}}>show</button></p>)
    } else {
      display = (<h3>too many much, specify another much</h3>)
    }
  }


  if (filterCountry.length===1) {
    display = filterCountry
    .map(val => <p key={val.name}>
      <h1>{val.name}</h1> 
      <p>capital {val.capital}</p>
      <p>population {val.population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {
          val.languages.map(val=> <li key={val.name}>{val.name}</li>)
        }
      </ul>
      <p><img src={val.flag} alt={val.name} width="300" /></p>
    </p>)
  }

  
  return (
    <div>
      <SearchInput change={handleChange} />
      <InfoCountry show = {display} />
      <Weather city={city} />
    </div>
  );
}

export default App;
