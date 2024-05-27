import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Hotel from './Pages/Hotel';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Hotel' element={<Hotel />} />

      </Routes>
    </div>
  );
}

export default App;
