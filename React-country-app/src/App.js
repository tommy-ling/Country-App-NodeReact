import Switch from './Switch';
import Navbar from './Navbar';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {

  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Switch />
      </ThemeProvider>
    </div>
  );
}

export default App;