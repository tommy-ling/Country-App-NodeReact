import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import { ThemeContext } from './context/ThemeContext'
import './Navbar.css'

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={isDarkMode ? 'Navbar-bg-dk' : "Navbar-bg"}>
      <div className='Navbar'>
        <Link className={isDarkMode ? "Nav-link-dk" : "Nav-link"} to='/'>
          <h2>Where in the world?</h2>
        </Link>
        <div className='Navbar-right' onClick={toggleTheme}>
          <DarkModeIcon className="Nav-icon"/>
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar