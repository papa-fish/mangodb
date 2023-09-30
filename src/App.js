import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BookmarksPage from './pages/BookmarksPage';
import SearchResultsPage from './pages/SearchResultsPage';

import './App.css';
import NavBar from './components/NavBar';

export default function App() {

  return (
    <div className="App">

      <NavBar />

      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/bookmarks' element={<BookmarksPage />} />
          <Route path='/searchresults' element={<SearchResultsPage />} /> 
        </Routes>
      </div>

    </div>
  );
};