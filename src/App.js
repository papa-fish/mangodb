import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Bookmarks from './components/Bookmarks';

import './App.css';
import SearchResults from './components/SearchResults';
import NavBar from './components/NavBar';

export default function App() {

  return (
    <div className="App">

      <NavBar />

      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
          <Route path='/searchresults' element={<SearchResults />} /> 
        </Routes>
      </div>

    </div>
  );
};