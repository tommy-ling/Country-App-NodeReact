import { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { MenuItem, Select, FormControl, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from './context/ThemeContext';
import { selectStyle, searchStyle, selectStyleDk, searchStyleDk, MenuItemStyleDk, MenuListStyle, MenuItemSelected } from './style/MuiStyle';
import './Countries.css'

function Countries({ countries }) {
  const { isDarkMode } = useContext(ThemeContext)
  const [searchVal, setSearchVal] = useState("")
  const [filterVal, setFilterVal] = useState("All")

  const handleChange = (e) => {
    setSearchVal(e.target.value)
  }
  const handleFilter = (e) => {
    setFilterVal(e.target.value)
  }

  const search = (items) => {
    return items.filter(item => {
      if(item.region === filterVal) {
        return item['name'].common
        .toLowerCase()
        .indexOf(searchVal.toLowerCase()) > -1 
      } else if(filterVal === 'All') {
        return item['name'].common
        .toLowerCase()
        .indexOf(searchVal.toLowerCase()) > -1 
      }
    })
  } 
  const filteredCountries = search(countries)
 
  return (
    <div className={isDarkMode ? 'Countries-bg-dk' : 'Countries-bg'}>
      <div className="Countries-container">
        <div className="Countries-toolbar">
          <TextField 
            onChange={handleChange}
            sx={isDarkMode ? {...searchStyleDk} : {...searchStyle}}
            label={searchVal ? "" : <Fragment><SearchIcon />Search for a country...</Fragment>}
            InputLabelProps={{shrink: false, style: isDarkMode ? {color: 'white'} : {color: 'gray'}}}
            InputProps={{style: isDarkMode ? {color: 'white'} : {color: 'black'}}}/>
          <FormControl>
            <Select 
              value={filterVal} 
              onChange={handleFilter}
              MenuProps={{
                sx: isDarkMode && {...MenuItemSelected},
                PaperProps: {sx:{...MenuListStyle}}}}
              sx={isDarkMode ? {...selectStyleDk} : {...selectStyle}}>
              <MenuItem sx={isDarkMode && {...MenuItemStyleDk}} value="Africa">Africa</MenuItem>
              <MenuItem sx={isDarkMode && {...MenuItemStyleDk}} value="Americas">Americas</MenuItem>
              <MenuItem sx={isDarkMode && {...MenuItemStyleDk}} value="Asia">Asia</MenuItem>
              <MenuItem sx={isDarkMode && {...MenuItemStyleDk}} value="Europe">Europe</MenuItem>
              <MenuItem sx={isDarkMode && {...MenuItemStyleDk}} value="Oceania">Oceania</MenuItem>
              <MenuItem sx={isDarkMode && {...MenuItemStyleDk}} value="Antarctic">Antarctic</MenuItem>
              <MenuItem sx={isDarkMode && {...MenuItemStyleDk}} value="All">All</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="Countries">
          {countries[0] && filteredCountries.map(country => (
            <div 
            className={isDarkMode ? "card-dk" : "card"}
            key={country.name.common}
            >
              <img className="card-img-top" src={country.flags[1]} alt="Card image cap" />
              <div className="card-body">
                <Link className={isDarkMode ? 'Country-link-dk' : 'Country-link'} to={`/country/${country.name.common}`}>
                  <h5 className='card-title'>{country.name.common}</h5>
                </Link>
                <p><span>Population: </span>{country.population.toLocaleString()}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>Capital: </span>{country.capital[0] ? country.capital[0] : "N/A"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Countries