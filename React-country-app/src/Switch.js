import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'
import Countries from './Countries'
import Country from './Country'

function Switch() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    async function fetData() {
      const res = await axios.get('https://tom-country-app.herokuapp.com/api')
      const { data } = res
      setCountries(data)
    }
    fetData()
  }, [])

  return(
    <Routes>
      <Route path='/' element={<Countries countries={countries}/>} />
      <Route path='/country/:name' element={<Country countries={countries}/>} />
    </Routes>
  )
}

export default Switch;
