import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ThemeContext } from "./context/ThemeContext";
import './Country.css'

function Country({ countries }) {
  const { isDarkMode } = useContext(ThemeContext)
  const { name } = useParams()
  const navigate = useNavigate()
  if(!countries.length) {
    return null
  }
  const country = countries.filter(country => country.name.common === name)[0]


  const borderCountries = 
  country.borders
    .map(countryCode => {
    return countries.filter(country => country.cca3 === countryCode)
  }).map(country => {
    return country[0].name.common
  })

  return (
    <div className={isDarkMode ? "Country-bg-dk" : "Country-bg"}>
      <div className="Country-container">
        <button 
          className={isDarkMode ? "Country-btn-dk" : "Country-btn"} 
          onClick={() => navigate(-1)}>
          <ArrowBackIcon/> Back
        </button>
        <div className="Country-info">
          <div className="Country-flag">
            <img src={country.flags[1]} />
          </div>
          <div className="Country-details">
            <h3>{country.name.common}</h3>
            <div className="Country-details-mid">
              <div className="Country-details-mid-left">
                <p><span>Native Name: </span>
                {Object.keys(country.name.nativeName)[0] ? 
                country.name.nativeName[Object.keys(country.name.nativeName)[0]].common : "N/A"}</p>
                <p><span>Population: </span>{country.population.toLocaleString()}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>Sub Region: </span>{country.subregion ? country.subregion : "N/A"}</p>
                <p><span>Capital: </span>{country.capital[0] ? country.capital[0] : "N/A"}</p>
              </div>
              <div className="Country-details-mid-right">
                <p><span>Top Level Domain: </span>{country.tld[0] ? country.tld[0] : 'N/A'}</p>
                <p><span>Currencies: </span>
                {Object.keys(country.currencies)[0] ? 
                country.currencies[Object.keys(country.currencies)[0]].name : "N/A"}</p>
                <p><span>Languages: </span>{Object.values(country.languages)[0] ? Object.values(country.languages).join(', '): "N/A"}</p>
              </div>
            </div>
            <div className="Country-details-borders">
              <div className="Country-details-borders-title"><span>Border Countries: </span></div>
              <div className="Country-details-borders-btn">
                {country.borders[0] ? 
                borderCountries.map(borderCountry => (
                  <Link to={`/country/${borderCountry}`}>
                    <button 
                      className={isDarkMode ? "BorderCountry-link-dk" : "BorderCountry-link"}>{borderCountry}</button>
                  </Link>
                )) : 
                <p>N/A</p>}
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Country